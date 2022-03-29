import React, { useState, useEffect } from 'react';
import PageSizeSelector from './Pagination.PageSizeSelector';
import CurrentPageInformation from './Pagination.CurrentPageInformation';
import GoToPage from './Pagination.GoToPage';

const Pagination = (props) => {
    if (props.totalRowCount === null && props.totalRowCount === undefined) {
        console.error("totalRowCount cannot be null.");
    }
    if (props.paginationOnChange === null && props.paginationOnChange === undefined) {
        console.error("paginationOnChange cannot be null.");
    }
    if (props.pageSize === null && props.pageSize === undefined) {
        console.error("pageSize cannot be null.");
    }

    const paginationElement = (pageNumber, callBack) => {
        return <div key={"pg-" + pageNumber} style={pageNumber === currentPageNumber ? { border: "1px solid #000", padding: 3 } : { border: "" }}>
            <button type="button" onClick={() => { paginationOnChange(pageNumber, callBack) }}><strong>{(pageNumber + 1)}</strong></button>
        </div>;
    }

    const paginationToFirstElement = (callBack) => {
        return <div key={"pg-First"}><button type="button" onClick={() => { paginationOnChange(0, callBack) }}><strong>|&larr;</strong></button></div>;
    }

    const paginationToLastElement = (callBack) => {
        let lastPageNumber = Math.ceil(props.totalRowCount / pageSize) - 1;
        return <div key={"pg-Last"}><button type="button" onClick={() => { paginationOnChange(lastPageNumber, callBack) }}><strong>&rarr;|</strong></button></div>;
    }

    const paginationToPreviousElement = (callBack) => {
        let previousPageNumber = (currentPageNumber - 1) <= 0 ? 0 : currentPageNumber - 1;
        return <div key={"pg-Previous"}><button type="button" onClick={() => { paginationOnChange(previousPageNumber, callBack) }}><strong>&larr;</strong></button></div>;
    }

    const paginationToNextElement = (callBack) => {
        let lastPageNumber = Math.ceil(props.totalRowCount / pageSize) - 1;
        let nextPageNumber = (currentPageNumber + 1) >= lastPageNumber ? lastPageNumber : currentPageNumber + 1;
        return <div key={"pg-Next"}><button type="button" onClick={() => { paginationOnChange(nextPageNumber, callBack) }}><strong>&rarr;</strong></button></div>;
    }

    const paginationOnChange = (pageNumber, callBack) => {
        var pageCount = calculatePageCount();
        pageNumber = pageNumber >= pageCount ? pageCount : pageNumber;
        setCurrentPageNumber(pageNumber);
        callBack(pageNumber, pageSize);
    }

    const calculatePaginationButtonSize = () => {
        let _paginationButtonSize = 5;
        if (props.paginationButtonSize !== null && props.paginationButtonSize !== undefined) {
            _paginationButtonSize = props.paginationButtonSize;
        }
        return _paginationButtonSize;
    }

    const calculateStartAndEndPage = (pageCount) => {
        let pageButtonSize = Math.ceil(paginationButtonSize / 2);
        let startPage = currentPageNumber - pageButtonSize <= 0 ? 0 :
            (currentPageNumber - pageButtonSize);
        let endPage = currentPageNumber + pageButtonSize > pageCount ? pageCount :
            (currentPageNumber + pageButtonSize);
        return { startPage, endPage };
    }

    const calculatePageCount = () => {
        return Math.ceil(props.totalRowCount / pageSize);
    }

    const generatePaginationPanel = () => {
        var pageCount = calculatePageCount();
        var paginationButtonList = [];
        paginationButtonList.push(paginationToFirstElement(props.paginationOnChange));
        paginationButtonList.push(paginationToPreviousElement(props.paginationOnChange));
        let { startPage, endPage } = calculateStartAndEndPage(pageCount);
        for (let i = startPage; i < endPage; i++) {
            paginationButtonList.push(paginationElement(i, props.paginationOnChange));
        }
        paginationButtonList.push(paginationToNextElement(props.paginationOnChange));
        paginationButtonList.push(paginationToLastElement(props.paginationOnChange));
        return <div style={{ display: "flex" }}>{paginationButtonList}</div>;
    }

    const pageSizeChangeHandle = () => {
        setCurrentPageNumber(1);
        generatePaginationPanel();
    }

    const [pageSize, setPageSize] = useState(props.pageSize);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    var paginationButtonSize = calculatePaginationButtonSize();

    useEffect(() => {
        pageSizeChangeHandle();
        paginationOnChange(currentPageNumber, props.paginationOnChange)
    }, [pageSize]);

    useEffect(() => {
        generatePaginationPanel();
        paginationOnChange(currentPageNumber, props.paginationOnChange)
    }, [currentPageNumber]);

    return <div style={Styles.flex}>
        <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} ></PageSizeSelector>
        {generatePaginationPanel()}
        <GoToPage pageCount={calculatePageCount()} pageNumber={currentPageNumber} setPageNumber={setCurrentPageNumber}></GoToPage>
        <CurrentPageInformation pageSize={pageSize} currentPageNumber={currentPageNumber} totalRowCount={props.totalRowCount}></CurrentPageInformation>
    </div>;
}

const Styles = {
    flex: {
        display: "flex"
    }
};

export default Pagination;