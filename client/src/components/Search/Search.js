import React from "react";
import "./Search.css";

const Search = (props) => (
    <div className="searchPanel panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title text-center">Article Search</h3>
        </div>
        <div className="panel-body">
            <form className="articleSearchForm">
                <h2>Topic</h2>
                <input onChange={props.handleInputChange} type="text" name="topic" placeholder="i.e. sports" className="topic"></input>
                <br/><br/>
                <h2>Start Year</h2>
                <input onChange={props.handleInputChange} name="startYear" placeholder="i.e. YYYYMMDD" className="startYear"></input>
                <br/><br/>
                <h2>End Year</h2>
                <input onChange={props.handleInputChange} name="endYear" placeholder="i.e. YYYYMMDD" className="endYear"></input>
                <br/><br/>
                <button onClick={props.fetchArticles} type="submit" className="btn btn-success submit">Submit</button>
            </form>
        </div>
    </div>
)

export default Search;