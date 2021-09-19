// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

const nock = require('nock');

module.exports = {
  'default e2e tests': browser => {
    nock('http://localhost:8080')
      .get('/api/textEditors')
      .reply(200, {results: [{title:"title",text:"<p>text</p>",createdAt:"2021-09-19T16:03:00.682Z",updatedAt:"2021-09-19T16:03:00.682Z",id:"61475f34afff20f3a3ef1d58"}]});
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.containsText('h4', 'TextEditors List')
      .assert.elementCount(".list-group", 1)
      .end()
  },

  'default add tests': browser => {
    nock('http://localhost:8080/api')
      .post('/textEditors')
      .reply(200, {results: [{title:"title",text:"<p>text</p>",createdAt:"2021-09-19T16:03:00.682Z",updatedAt:"2021-09-19T16:03:00.682Z",id:"61475f34afff20f3a3ef1d58"}]});
    browser
      .init()
      .click('a#nav-link-add')
      .waitForElementVisible('#app')
      .setValue('input#title', 'title')
      .click('button#editform-submit')
      .assert.containsText('h4', 'You submitted successfully!')
      .end()
  },

  'default edit tests': browser => {
    nock('http://localhost:8080/api')
      .get('/textEditors')
      .reply(200, {results: [{title:"title",text:"<p>text</p>",createdAt:"2021-09-19T16:03:00.682Z",updatedAt:"2021-09-19T16:03:00.682Z",id:"61475f34afff20f3a3ef1d58"}]});
    nock('http://localhost:8080/api')
      .put('/textEditors')
      .reply(200, {results: [{title:"title",text:"<p>text</p>",createdAt:"2021-09-19T16:03:00.682Z",updatedAt:"2021-09-19T16:03:00.682Z",id:"61475f34afff20f3a3ef1d58"}]});
    browser
      .url('https://jsramverk-editor-ersr20.azurewebsites.net/#/texts/6147a05948adda7689346566')
      .waitForElementVisible('#app')
      .setValue('input#title', 'changed')
      .click('button.btn-warning')
      .assert.containsText('#app', 'The textEditor was updated successfully!')
      .end()
  }
}
