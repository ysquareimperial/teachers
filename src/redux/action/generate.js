import { _fetchApi, apiURL, _postApi } from "./api";

export const getGenerate = (q = {}, callback = (f) => f, error = (f) => f) => {
    const query_string = Object.keys(q)
        .map((a) => a + "=" + q[a])
        .join("&");
    // console.log(query_string, 'sss')
    _fetchApi(
        `/get/generator?${query_string}`,
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

// Start Subject Generator

export const getSubjectGenerate = (q = {}, callback = (f) => f, error = (f) => f) => {
    const query_string = Object.keys(q)
        .map((a) => a + "=" + q[a])
        .join("&");
    // console.log(query_string, 'sss')
    _fetchApi(
        `/get/subject/generator?${query_string}`,
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