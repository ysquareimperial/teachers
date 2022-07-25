import { _fetchApi, apiURL, _postApi } from "./api";

export const getSubject = (q = {}, callback = (f) => f, error = (f) => f) => {
    const query_string = Object.keys(q)
        .map((a) => a + "=" + q[a])
        .join("&");
    // console.log(query_string, 'sss')
    _fetchApi(
        `/get/student/subject?${query_string}`,
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

export const postSubject = (
    data = {},
    callback = (f) => f,
    error = (f) => f
) => {
    _postApi(
        `/post/student/subject`,
        data,
        (data) => {
            if (data.success) {
                callback(data);
            }
        },
        error
    );
};