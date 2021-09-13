<template>
  <div class="list row">
    
    <div class="col-md-6">
      <h4>TextEditors List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(textEditor, index) in textEditors"
          :key="index"
          @click="setActiveTextEditor(textEditor, index)"
        >
          {{ textEditor.title }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentTextEditor">
        <h4>TextEditor</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentTextEditor.title }}
        </div>
        <div>
          <label><strong>Text:</strong></label> {{ currentTextEditor.text }}
        </div>
        <router-link :to="'/texts/' + currentTextEditor.id" class="btn btn-primary">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a TextEditor...</p>
      </div>
    </div>
  </div>
</template>

<script>
import TextEditorDataService from "../services/TextEditorDataService";

export default {
  name: "textEditors-list",
  data() {
    return {
      textEditors: [],
      currentTextEditor: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTextEditors() {
      TextEditorDataService.getAll()
        .then(response => {
          this.textEditors = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTextEditors();
      this.currentTextEditor = null;
      this.currentIndex = -1;
    },

    setActiveTextEditor(textEditor, index) {
      this.currentTextEditor = textEditor;
      this.currentIndex = index;
    },

    removeAllTextEditors() {
      TextEditorDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      TextEditorDataService.findByTitle(this.title)
        .then(response => {
          this.textEditors = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTextEditors();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
