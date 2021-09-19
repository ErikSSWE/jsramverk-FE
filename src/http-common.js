import axios from "axios";

let baseUrl = process.env.APIURL || "https://jsramverk-editor-ersr20.azurewebsites.net/api";

if (process.env.NODE_ENV === 'development') {
  // We can even use MongoDB Atlas for testing
  baseUrl = "http://localhost:8080/api";
}

if (process.env.NODE_ENV === 'e2etest') {
  // We can even use MongoDB Atlas for testing
  baseUrl = "http://localhost:8080/api";
}

console.log("NEV_NODE:", process.env.NODE_ENV);
console.log("baseURl: ", baseUrl);
console.log("APIURL: ", process.env.APIURL);

export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json"
  }
});
