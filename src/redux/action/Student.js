import { _fetchApi, apiURL, _postApi } from "./api";

export const getStudent = (q = {}, callback = (f) => f, error = (f) => f) => {
    const query_string = Object.keys(q)
        .map((a) => a + "=" + q[a])
        .join("&");
    // console.log(query_string, 'sss')
    _fetchApi(
        `/get/student?${query_string}`,
        (data) => {
            if (data.success) {
                callback(data.results);
            }
        },
        (err) => {
            error(err);
        }
    );
};

export const postStudent = (
    data = {},
    callback = (f) => f,
    error = (f) => f
) => {
    _postApi(
        `/post/student`,
        data,
        (data) => {
            if (data.success) {
                callback(data.results);
            }
        },
        error
    );
};