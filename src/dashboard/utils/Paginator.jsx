import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { viewProperties } from "../../consts";

const Paginator = ({
    canPaginate,
    pageNum,
    setPageNum,
    limitValue,
    setLimitValue,
}) => {
    return (
        <Col
            lg={4}
            className="justify-content-md-center"
            style={{ display: "flex", alignItems: "center" }}
        >
            <Pagination style={{ margin: 0, padding: 10 }}>
                <Pagination.Prev
                    onClick={(e) => setPageNum(pageNum - 1)}
                    disabled={pageNum === 1}
                />
                <Pagination.Item active>{pageNum}</Pagination.Item>
                <Pagination.Next
                    onClick={(e) => setPageNum(pageNum + 1)}
                    disabled={!canPaginate}
                />
            </Pagination>
            <Form.Select
                aria-label="Default select example"
                style={{ width: 100, margin: "0px 10px" }}
                size="sm"
                value={limitValue}
                onChange={(e) => {
                    setLimitValue(e.target.value);
                }}
            >
                <option value="">View</option>
                {viewProperties.map((item, idx) => {
                    return (
                        <option value={item.value} key={idx}>
                            {item.label}
                        </option>
                    );
                })}
            </Form.Select>
        </Col>
    );
};

export default Paginator;
