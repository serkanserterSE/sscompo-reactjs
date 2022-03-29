import React from 'react';

const CurrentPageInformation = ({ totalRowCount, currentPageNumber, pageSize }) => {
    return <div style={{ display: "flex" }}>
        <div><span>({currentPageNumber * pageSize} / {totalRowCount})</span></div>
    </div>;
}
export default CurrentPageInformation;