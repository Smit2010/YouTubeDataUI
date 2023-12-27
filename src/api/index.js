import axios from "axios";
import { BASE_URL } from "../consts";

export const getVideoDataWithFilterAndSort = async (
    searchQuery,
    page,
    limit,
    filter,
    sort
) => {
    let query = `search=${searchQuery}`;

    if (page) {
        query += `&page=${page}`;
    }

    if (limit) {
        query += `&limit=${limit}`;
    }

    if (filter) {
        query += `&filter=${filter}`;
        query += `&sort=${sort}`;
    }
    try {
        const { data } = await axios.get(
            `${BASE_URL}/get-videos-with-filters?${query}`
        );
        return { data: data.response, hasMoreData: data.hasMoreData };
    } catch (err) {
        console.error(err);
        throw err;
    }
};
