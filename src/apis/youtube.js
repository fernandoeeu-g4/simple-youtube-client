import axios from "axios";

const KEY = "AIzaSyAWGRAnPSPy_j7d9aa6EBkf1E_ER-QqfSQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    type: "video",
    key: KEY
  }
});
