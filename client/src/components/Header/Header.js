import React from "react";
import "./Header.css";

const Header = () => (
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-4">NYT Scraper</h1>
            <hr className="my-4"/>
            <p>Scrape the NYT and save articles to read for later</p>
        </div>
    </div>
)

export default Header;