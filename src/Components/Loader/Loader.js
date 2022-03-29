import React from 'react';
import './Loader.css'

export default class Loader extends React.Component {
    //<div className='loader-icon' style={{width:300, height:300}}></div>

    render() {
        return <div className='loader-background' style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: this.props.openLoader === true ? "block" : "none"
        }}>
            <div style={{
                position: "absolute",
                color: "rgba(195,195,195,7)",
                top: "45%",
                left: "47%"
            }}>
                <h2 style={{ textShadow: "-3px 4px 5px" }}>Loading...</h2>
            </div>
        </div>;
    }
}