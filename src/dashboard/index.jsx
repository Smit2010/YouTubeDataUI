import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { getVideoDataWithFilterAndSort } from "../api";
import FilterAndSort from "./utils/FilterAndSort";
import VideoData from "./utils/VideoData";
import SpinLoader from "./utils/SpinLoaded";
import Paginator from "./utils/Paginator";

const Dashboard = () => {
    const [searchValue, setSearchValue] = useState("");
    const [dataArr, setDataArr] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [canPaginate, setCanPaginate] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [sortValue, setSortValue] = useState("default");
    const [limitValue, setLimitValue] = useState("5");

    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNum, limitValue, filterValue, sortValue]);

    const handleSearch = () => {
        setIsFetching(true);
        getVideoDataWithFilterAndSort(
            searchValue,
            pageNum,
            limitValue,
            filterValue,
            sortValue
        )
            .then(({ data, hasMoreData }) => {
                setDataArr(data);
                setCanPaginate(hasMoreData);
                setIsFetching(false);
            })
            .catch((err) => {
                setIsFetching(false);
            });
    };

    return (
        <Container style={{ marginTop: 40 }}>
            <Row className="justify-content-md-center">
                <Col lg={6}>
                    <InputGroup className="mb-3" style={{ margin: 0 }}>
                        <Form.Control
                            placeholder="Search"
                            value={searchValue}
                            onKeyDown={(e) =>
                                e.key === "Enter" ? handleSearch() : null
                            }
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Button
                            variant="outline-primary"
                            id="button-addon2"
                            onClick={handleSearch}
                            style={{ width: 50 }}
                            type="submit"
                        >
                            {isFetching ? <SpinLoader isButton /> : "GO"}
                        </Button>
                    </InputGroup>
                </Col>
                <FilterAndSort
                    isFetching={isFetching}
                    setIsFetching={setIsFetching}
                    dataArr={dataArr}
                    setDataArr={setDataArr}
                    searchValue={searchValue}
                    setCanPaginate={setCanPaginate}
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                    sortValue={sortValue}
                    setSortValue={setSortValue}
                />
            </Row>
            <Row className="justify-content-md-center">
                <Paginator
                    canPaginate={canPaginate}
                    pageNum={pageNum}
                    setPageNum={setPageNum}
                    limitValue={limitValue}
                    setLimitValue={setLimitValue}
                />
            </Row>
            <VideoData data={dataArr} isFetching={isFetching} />
        </Container>
    );
};

export default Dashboard;
