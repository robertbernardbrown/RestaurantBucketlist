import React from "react";
import "./SavedPanel.css";

const SavedPanel = (props) => (
    <div className="savePanel panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body">
            {!props.articles.length ? <h1>No results to display</h1> :
                props.articles.map((cur, i) => {
                    return (
                        <div key={cur._id}>
                            <h1>{cur.title}</h1>
                            <p>Date published: {cur.date}</p>
                            <p>Date accessed: {cur.dateAccessed}</p>
                            <a href={cur.url} target="_blank"><p>{cur.url}</p></a>
                            <button onClick={props.handleDelete} id={cur._id} className="btn btn-danger">Delete</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
)

export default SavedPanel;