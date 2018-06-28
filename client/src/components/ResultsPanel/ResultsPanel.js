import React from "react";
import "./ResultsPanel.css";

const ResultsPanel = (props) => (
    <div className="searchPanel panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title text-center">Article Results</h3>
        </div>
        <div className="panel-body">
            {!props.articles.length ? <h1>No results to display</h1> :
                props.articles.map((cur, i) => {
                    while (i < 5) {
                    return (
                        <div id={"article"+i} key={cur._id} className="article">
                            <h1 name="title">{cur.headline.main}</h1>
                            <p name="date">{cur.pub_date}</p>
                            <p>{cur.snippet}</p>
                            <a name="url" target="_blank" href={cur.web_url}><button className="btn btn-primary">Read More</button></a>
                            <button data-title={cur.headline.main} data-date={cur.pub_date} data-url={cur.web_url} type="submit" name="submit" className="articleSave btn btn-success pull-right" onClick={props.saveArticle}>Save Article</button>
                        </div>
                    )
                }
                })
            }
        </div>
    </div>
)

export default ResultsPanel;