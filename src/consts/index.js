exports.BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

exports.filterProperties = [
    {
        label: "Published Date",
        value: "date",
    },
    {
        label: "Views",
        value: "views",
    },
    {
        label: "Likes",
        value: "likes",
    },
    {
        label: "Comments",
        value: "comments",
    },
];

exports.sortProperties = [
    {
        label: "Sort",
        value: "default",
    },
    {
        label: "High to Low",
        value: "-1",
    },
    {
        label: "Low to High",
        value: "1",
    },
];

exports.viewProperties = [
    {
        label: "5",
        value: "5",
    },
    {
        label: "10",
        value: "10",
    },
    {
        label: "20",
        value: "20",
    },
    {
        label: "30",
        value: "30",
    },
];
