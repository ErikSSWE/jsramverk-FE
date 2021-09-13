import axios from "axios";

export default axios.create({
  baseURL: "https://jsramverk-editor-ersr20.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});
