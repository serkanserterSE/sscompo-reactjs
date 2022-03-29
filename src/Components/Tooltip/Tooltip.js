import React, { useState, useEffect } from 'react';
import './Tooltip.css'

const ToolTip = (props) => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--tooltip-background-color', props.backgroundColor || "#000");
    }, []);

    return <div className="tooltip-wrapper"
        onMouseEnter={showTip}
        onMouseLeave={hideTip}>
        {props.children}
        {active && (
            <div className={`tooltip-tip ${props.direction || "top"}`}
                style={{ backgroundColor: props.backgroundColor || "#000", color: props.textColor || "#fff" }}>
                <div style={{ whiteSpace: "normal" }}>{props.content}</div>
            </div>
        )}
    </div >
}

export default ToolTip