import React, { Component } from "react";
import API from "../utils/API";
import SavedPanel from "../components/SavedPanel"

class Saved extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    API.getSavedArticles()
    .then(res=> {
        this.setState({
            articles: res.data
        })
    })
    .catch(err => console.log(err))    
  }

  handleDelete = (e) => {
    API.deleteSavedArticle(e.target.id)
    .then(res => {
        this.loadSaved();
    })
    .catch(err=>{console.log(err)})
  }

  loadSaved = () => {
    API.getSavedArticles()
    .then(res=> {
        this.setState({
            articles: res.data
        })
    })
    .catch(err => console.log(err)) 
  }

  render() {
    return (
      <SavedPanel handleDelete={this.handleDelete} articles={this.state.articles}/>
    );
  }
}

export default Saved;