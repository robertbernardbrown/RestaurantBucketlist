import axios from "axios";

export default {
    getArticles: (topic, start, end) => {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params: {
                'api-key'   : "3d18b69255a54a70b618943840ed2390",
                'q'         : topic,
                'begin_date': start,
                'end_date'  : end
            }
        })
    },
    saveArticle: (data) => {
        return axios.post("/api/articles", data);
    },
    getSavedArticles: () => {
        return axios.get("/api/articles")
    },
    deleteSavedArticle: (id) => {
        return axios.delete("/api/articles/" + id);
    }
}