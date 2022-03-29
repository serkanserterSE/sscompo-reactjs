import React from 'react';
import Pagination from '../Pagination/Pagination';

const Footer = ({colSpan, paginationProps}) => {
    return <tfoot><tr><td colSpan={colSpan}><Pagination {...paginationProps}></Pagination></td></tr></tfoot>;
}
export default Footer;