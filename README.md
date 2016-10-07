# React Testing Workshop

For some great general advice on testing see https://eev.ee/blog/2016/08/22/testing-for-people-who-hate-testing/

## Setup

* `npm install`

## Running

* `npm start` - run the development server
* `npm test` - run the tests
* `npm run test:watch` - run the tests in watch mode

If you want desktop notifications to work in watch mode, you'll need to follow the instructions from [node-growl](https://github.com/tj/node-growl#installation).

## Tasks

The application spec is helpfully provided by [TodoMVC](https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality).

### Part 1: Staying out of React

  1. Flesh out some test scenarios for clearCompleted in `todos-spec.js`.
  2. Implement clearCompleted in `todos.js`.
  3. Move the `.trim()` logic out of `Header.js` and `TodoItem.js` into the data layer in `todos.js` and expand test coverage in `todos-spec.js`.

Reference links

  * [mocha](http://mochajs.org/#getting-started)
  * [chai.assert](http://chaijs.com/api/assert/)
  * [sinon.spy](http://sinonjs.org/docs/#sinonspy)

### Part 2: Shallow Rendering

  1. Add the other scenarios for the filter toggling behaviour in `Footer-spec.js`.
  2. Try changing the component & tests so the action is not fired if the filter is already selected.
  3. Add tests for the `escape` behaviour described in the TodoMVC spec, and then implement it (`TodoItem-spec.js` and `TodoItem.js`).

Reference links

  * [Shallow Rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering)
  * [enzyme shallow](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md)

### Part 3: Visual Feedback

  1. Open up the `/devboard` page and take a look at `AddTodo` and `TodoItem`.
  2. Experiment with changing the CSS or the React component implementations and seeing how the results impact the devboard pages.
  3. Try adding some more examples to `Footer.dev.js` that show the different scenarios. Does the component seem like it has too many responsibilities?

Reference links

  * [devboard](https://github.com/glenjamin/devboard#usage)
  * [react-storybook](https://getstorybook.io/)
