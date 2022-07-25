import data from "./data.json";
import Jobs from "./Jobs";
import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import "./stylePost.scss";

function JobsIndex() {
    const [filterKeywords, setfilterKeywords] = useState([]);

    // const setSearchKeyword = (data) => {
    //   setfilterKeywords(data);
    // };

    const addFilterKeywords = (data) => {
        if (!filterKeywords.includes(data)) {
            setfilterKeywords([...filterKeywords, data]);
        }
    };

    const deleteKeyword = (data) => {
        const newKeywords = filterKeywords.filter((key) => key !== data);
        setfilterKeywords(newKeywords);
    };

    const clearAll = () => {
        setfilterKeywords([]);
    };

    return (
        <div>
            <div className="header"></div>

            {/* <Search setSearchKeyword={setSearchKeyword} /> */}

            {filterKeywords.length > 0 && (
                <Header
                    keywords={filterKeywords}
                    removeKeywords={deleteKeyword}
                    clearAll={clearAll}
                />
            )}

            <Jobs
                keywords={filterKeywords}
                data={data}
                setKeywords={addFilterKeywords}
            />
        </div>
    );
}

export default JobsIndex;
