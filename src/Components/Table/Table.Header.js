import React from 'react';

const Header = ({columns}) => {
    return <thead>
        <tr>{columns.map((element, index) => {
            return <th style={{ maxWidth: element.width }} key={"th" + index}><span>{element.text}</span></th>;
        })}</tr>
    </thead>;
}
export default Header;