import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { filterProperties, sortProperties } from "../../consts";

const FilterAndSort = ({
    isFetching,
    dataArr,
    filterValue,
    setFilterValue,
    sortValue,
    setSortValue,
}) => {
    return (
        <Col
            lg={4}
            className="justify-content-md-center"
            style={{ display: "flex" }}
        >
            <Form.Select
                aria-label="Default select example"
                style={{ width: 150, margin: "0px 10px" }}
                size="sm"
                className="mb-3"
                disabled={isFetching || dataArr.length === 0}
                value={filterValue}
                onChange={(e) => {
                    setFilterValue(e.target.value);
                }}
            >
                <option value="">Filter</option>
                {filterProperties.map((item, idx) => {
                    return (
                        <option value={item.value} key={idx}>
                            {item.label}
                        </option>
                    );
                })}
            </Form.Select>
            <Form.Select
                aria-label="Default select example"
                style={{ width: 150, margin: "0px 10px" }}
                size="sm"
                className="mb-3"
                disabled={
                    isFetching || dataArr.length === 0 || filterValue === ""
                }
                value={sortValue}
                onChange={(e) => {
                    setSortValue(e.target.value);
                }}
            >
                {sortProperties.map((item, idx) => {
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

export default FilterAndSort;
