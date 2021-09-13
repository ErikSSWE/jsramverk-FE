import Vue from "vue";
import Router from "vue-router";
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(Router);
Vue.use(CKEditor);

export default new Router({
  //mode: "history",
  routes: [
    {
      path: "/",
      alias: "/texts",
      name: "textEditors",
      component: () => import("./components/TextEditorList")
    },
    {
      path: "/texts/:id",
      name: "textEditor-details",
      component: () => import("./components/TextEditor")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTextEditor")
    }
  ]
});
