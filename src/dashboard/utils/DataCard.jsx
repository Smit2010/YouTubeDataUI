import React from "react";
import Card from "react-bootstrap/Card";

const DataCard = ({ title, description, idx, imgUrl }) => {
    return (
        <Card style={{ height: 400, margin: 10 }} key={idx}>
            <Card.Img variant="top" src={imgUrl} style={{ height: 150 }} />
            <Card.Body style={{ height: 250, padding: 15 }}>
                <Card.Title
                    style={{
                        height: 115,
                        margin: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: 18,
                    }}
                >
                    {title}
                </Card.Title>
                <Card.Text
                    style={{
                        fontSize: 14,
                        height: 105,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default DataCard;
