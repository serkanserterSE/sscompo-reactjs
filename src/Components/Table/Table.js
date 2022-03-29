import React from 'react';
import Body from './Table.Body';
import Footer from './Table.Footer';
import Header from './Table.Header';
import './Table.css'

export default class Table extends React.Component {
    render() {
        return <div>
            <table>
                <Header columns={this.props.data.headers} />
                <Body headers={this.props.data.headers} rows={this.props.data.body.rows} />
                <Footer colSpan={this.footerColSpan()} paginationProps={this.props.data.pagination} />
            </table>
        </div>;
    }
    footerColSpan = () => {
        return this.props.data.headers.length;
    }
}