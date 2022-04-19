import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader/Loader';
import Popover from '../Components/Popover/Popover';
import Table from '../Components/Table/Table'
import ToolTip from '../Components/Tooltip/Tooltip';

function SamplePage() {
    const [openLoader, setOpenLoader] = useState(false);
    const [list, setList] = useState([]);
    const [totalRowCount, setTotalRowCount] = useState(0);
    const getData = (pageNumber = 0, pageSize = 10) => {
        let _list = [];
        setOpenLoader(true);
        fetch("https://dummyjson.com/users?skip=" + (pageNumber * pageSize) + "&limit=" + pageSize)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                data.users.forEach((elm) => {
                    _list.push({
                        first: elm.firstName, last: elm.lastName,
                        gender: <Popover header={<strong>Lorem ipsum dolor sit amet</strong>}
                            content={<div><p>Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet</p><button type='button'>Button</button></div>}
                            footer={<span>Lorem ipsum dolor sit amet</span>}
                            direction="right">
                            <div>{elm.gender}*</div>
                        </Popover>
                    })
                });
                setList(_list);
                setTotalRowCount(data.total);
                setOpenLoader(false);
            });
    }

    useEffect(() => { getData(); }, []);

    return (
        <div>
            <Loader openLoader={openLoader} />
            <div style={{ position: "absolute", top: "15%", left: "40%" }}>
                <Table data={
                    {
                        headers: [
                            {
                                text: "Name",
                                columnName: "first"
                            },
                            {
                                text: "Surname",
                                columnName: "last"
                            },
                            {
                                text: <ToolTip content={<strong>Lorem ipsum dolor sit amet</strong>}
                                    direction="right"
                                    backgroundColor="#ffd"
                                    textColor="#123">
                                    <div>Gender*</div>
                                </ToolTip>,
                                width: 50,
                                columnName: "gender"
                            }
                        ],
                        body: {
                            rows: list
                        },
                        pagination: {
                            totalRowCount: totalRowCount,
                            pageSize: 10,
                            paginationOnChange: (pageNumber, pageSize) => { getData(pageNumber, pageSize); }
                        }
                    }
                }></Table>
            </div>
        </div>
    );
}

export default SamplePage;
