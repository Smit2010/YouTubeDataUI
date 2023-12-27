import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DataCard from "./DataCard";
import SpinLoader from "./SpinLoaded";

const VideoData = ({ data, isFetching }) => {
    return (
        <Row className="justify-content-md-center" style={{ marginTop: 20 }}>
            {isFetching ? (
                <SpinLoader />
            ) : data && data.length > 0 ? (
                data.map((item, idx) => {
                    return (
                        <Col lg={3} key={idx}>
                            <DataCard
                                title={item.title}
                                description={item.description}
                                idx={idx}
                                imgUrl={item.thumbnails.mediumUrl}
                            />
                        </Col>
                    );
                })
            ) : (
                "No Records"
            )}
        </Row>
    );
};

export default VideoData;
