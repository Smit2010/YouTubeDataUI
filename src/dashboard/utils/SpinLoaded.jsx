import React from "react";
import Spinner from "react-bootstrap/Spinner";

const SpinLoader = ({ isButton }) => {
    return (
        <Spinner
            animation="border"
            role="status"
            size="sm"
            style={{ height: !isButton && 30, width: !isButton && 30 }}
        >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};

export default SpinLoader;
