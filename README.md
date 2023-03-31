# Lab 31 - 33 : To-do App

To Do List Manager Phase 1: Incorporate configuration settings to the application.

Currently, a user can add todo tasks to the proof-of-life starter application. In this phase, we will add hard-wired, default context settings to the application so that the user can view three incomplete todo tasks. In addition, the user will have the option of viewing any additional incomplete tasks by using pagination functionality.

## Phase 1 Requirements

In Phase 1, we’re going to perform some refactoring of a Todo application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

- Create a Detailed UML.
- Properly modularize the application into separate components, note the proposed file structure below.
- Implement the Context API to make some basic application settings available to components.
  - Show three items by default.
  - Hide completed items by default.
  - Add the sort word ‘difficulty’ by default.
- Style the application using the Mantine ```Component API{target:_blank}```

**Phase 2 Requirements**
In Phase 2, we’re going to extend the functionality of our application by allowing the user to make some decisions on how they would like the application to function. Specifically, we’ll let them make changes to 2 settings.

- Implement the Context API to make some basic application settings available to components.
  - How many To Do Items to show at once.
  - Whether or not to show completed items.
  - Hint: if reusing the custom useForm() hook, event validation may be necessary if using any Mantine component other than ```<TextInput />```.
- Provide the users with a form where they can change the values for those settings.
  - This should be given in the form of a new component, perhaps linked to from the main navigation.
  - Hint: Use Browser Router to create the page/route/component for this.
  - Once settings are updated, render the updated settings to the right of the “form”. Consider using ```<Grid />```, ```<Card />```, and ```<When />``` components.
- Save the users choices in Local Storage.
- Retrieve their preferences from Local Storage and apply them to the application on startup

### Phase 3 Requirements

In Phase 3, we’d like to extend the functionality of the application by requiring users be logged in to view items and also restrict access based on user type. The user stories from Phases 1, and 2 remain unchanged. For this phase, we are now adding the following new user stories.

- As a user, I want to provide a way for all users to login to their account.

- As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.

- As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items.

- As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete.

- As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

On Testing

Tests should assert all behavioral functionality.
Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

TODO:Documentation

- Describe how global state is consumed by the components.

- Describe the operation of the hook: useForm().

![UML Diagram](/Lab%2031.png)

03/31