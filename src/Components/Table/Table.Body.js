import React from 'react';

const Body = ({ headers, rows }) => {
    return <tbody key="tbody">
        {
            rows.map((row, index) => {
                let tds = [];
                headers.forEach((elm, cIndex) => {
                    tds.push(<td key={elm.columnName + cIndex}>
                        <span>{row[elm.columnName]}</span>
                    </td>);
                });
                return <tr key={"tbody-" + index}>{tds}</tr>;
            })
        }
    </tbody>;
}
export default Body;