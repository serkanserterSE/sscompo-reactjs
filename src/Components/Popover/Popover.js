import React, { useState, useEffect } from 'react';
import './Popover.css'

const Popover = (props) => {
    let timeout;
    const [active, setActive] = useState(false);

    const show = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 400);
    };

    const hide = () => {
        clearInterval(timeout);
        setActive(false);
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--popover-background-color', props.backgroundColor || "#fff");
    }, []);

    return <div className="popover-wrapper"
        onMouseEnter={show}
        onMouseLeave={hide}>
        {props.children}
        {active && (
            <div className={`popover-tip ${props.direction || "top"}`}
                style={{ backgroundColor: props.backgroundColor || "#fff", color: props.textColor || "#000" }}>
                {props.header !== undefined ? <div className='popover-header'>{props.header}<hr /></div> : <span></span>}
                
                <div className='popover-content'><div>{props.content}</div></div>
                
                {props.footer !== undefined ? <div className='popover-footer'><hr />{props.footer}</div> : <span></span>}
            </div>
        )}
    </div >
}

export default Popover