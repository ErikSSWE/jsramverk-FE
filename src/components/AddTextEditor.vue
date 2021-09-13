<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="textEditor.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="text">Text</label>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      </div>

      <button @click="saveTextEditor" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTextEditor">Add</button>
    </div>
  </div>
</template>

<script>
import TextEditorDataService from "../services/TextEditorDataService";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: "add-textEditor",
  data() {
    return {
      textEditor: {
        id: null,
        title: "",
        text: "",
        published: false
      },
      editor: ClassicEditor,
        editorData: "<p></p>",
        editorConfig: {
            // The configuration of the editor.
        },
      submitted: false
    };
  },
  methods: {
    saveTextEditor() {
      var data = {
        title: this.textEditor.title,
        text: this.editorData
      };

      TextEditorDataService.create(data)
        .then(response => {
          this.textEditor.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTextEditor() {
      this.submitted = false;
      this.textEditor = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
