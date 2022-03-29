import React from 'react';

const PageSizeSelector = ({ pageSize, setPageSize }) => {
    const onChangeHandle = (pageSizeValue) => {
        setPageSize(pageSizeValue);
    }
    return <div>
        <select value={pageSize} onChange={(e) => { onChangeHandle(parseInt(e.target.value)); }}>
            <option key={"opt-5"} value={5}>5</option>
            <option key={"opt-10"} value={10}>10</option>
            <option key={"opt-25"} value={25}>25</option>
            <option key={"opt-50"} value={50}>50</option>
            <option key={"opt-100"} value={100}>100</option>
        </select>
    </div>;
}
export default PageSizeSelector;