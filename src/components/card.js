import React from "react";

export function Card() {
    const [name, setName] = React.useState("Standard");
    const [firstText, setFirstText] = React.useState("Sample Text Core");
    const [secondText, setsecText] = React.useState("Other Text Title");
    const [TextSpace, setSpace] = React.useState("Text Space Coes Here");
    const [AndText, setAnd] = React.useState("SELECT");

    const containerStyle = {
        display: "flex",
        alignItems: "center",
        width: "200px", 
    };

    const iconStyle = {
        marginRight: "8px",
    };

    return (
        <div className="block">
            <div className="nameCard">{name}</div>
            <div className="secBlock" style={containerStyle}>
                <img src="free-icon-mark-14035541.png" width={32} style={iconStyle} /> {firstText}
            </div>
            <div className="secBlock" style={containerStyle}>
                <img src="free-icon-mark-14035541.png" width={32} style={iconStyle} /> {secondText}
            </div>
            <div className="secBlock" style={containerStyle}>
                <img src="free-icon-mark-14035541.png" width={32} style={iconStyle} /> {TextSpace}
            </div>
            <div className="secBlock" style={containerStyle}>
                <img src="free-icon-mark-14035541.png" width={32} style={iconStyle} /> {TextSpace}
            </div>
            <div className="nameNewCard">{AndText}</div>
        </div>
    );
}
