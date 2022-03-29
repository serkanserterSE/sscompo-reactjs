import React, { useState } from 'react';

const GoToPage = ({ pageNumber, setPageNumber, pageCount }) => {
    const [goToPageNumber, setGoToPageNumber] = useState(pageNumber);
    const GoToPageHandle = () => {
        let _pageNumber = goToPageNumber;
        if (goToPageNumber > pageCount) {
            _pageNumber = pageCount;
        } else if (goToPageNumber < 1) {
            _pageNumber = 1;
        }
        setPageNumber(_pageNumber - 1);
    } 

    return <div style={{ display: "flex" }}>
        <input style={{maxWidth:50}} type="number" min={1} max={pageCount} value={goToPageNumber} onChange={(e) => { setGoToPageNumber(parseInt(e.target.value)); }} />
        <button type='button' onClick={() => { GoToPageHandle(); }}>Go</button>
    </div>;
}
export default GoToPage;