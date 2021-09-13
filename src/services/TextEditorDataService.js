import http from "../http-common";

class TextEditorDataService {
  getAll() {
    return http.get("/textEditors");
  }

  get(id) {
    return http.get(`/textEditors/${id}`);
  }

  create(data) {
    return http.post("/textEditors", data);
  }

  update(id, data) {
    return http.put(`/textEditors/${id}`, data);
  }

  delete(id) {
    return http.delete(`/textEditors/${id}`);
  }

  deleteAll() {
    return http.delete(`/textEditors`);
  }

  findByTitle(title) {
    return http.get(`/textEditors?title=${title}`);
  }
}

export default new TextEditorDataService();
