// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

const nock = require('nock');

module.exports = {
  'default e2e tests': browser => {
    nock('http://localhost:8080/api')
      .get('/textEditors')
      .reply(200, {results: [{id:'123', title: 'erik', text: 'erik testar'}]});
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
      .url('http://localhost:8080/#/add')
      .waitForElementVisible('#app')
      .setValue('input#title', 'title')
      .click('button.btn-success')
      .assert.containsText('h4', 'You submitted successfully!')
      .end()
  },

  'default edit tests': browser => {
    nock('http://localhost:8080/api')
      .put('/textEditors')
      .reply(200, {results: [{title:"title",text:"<p>text</p>",createdAt:"2021-09-19T16:03:00.682Z",updatedAt:"2021-09-19T16:03:00.682Z",id:"61475f34afff20f3a3ef1d58"}]});
    browser
      .url('http://localhost:8080/#/texts/61475f34afff20f3a3ef1d58')
      .waitForElementVisible('#app')
      .setValue('input#title', 'title')
      .click('button.btn-warning')
      .assert.containsText('#app', 'The textEditor was updated successfully!')
      .end()
  }

}
