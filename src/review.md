# Review Questions:

1. What is the difference between state & props?

We call _Props_ the pieces of data (or initial values) passed into a child component from the parent while _state_ is data controlled within a component.

_State_ is one of the big advantages of using React (although the concept is not React specific) and in order to use it, we need a class component.

2. How do you add state to a class component?

To get started with **state**, we need to add a constructor to our class component. You can read more about constructors here, but for now just know that this is required to add _state_ to our components. Typically we see "props" being passed in as an argument for our constructor so we can use any props being passed into this component. The example below illustrates this.

3. How do you update state in a class component?
   setState method

```
this.setState({ item: "newValue" });
```

The code above calls a `this.setState` function and passes in an object with key-value pairs. If the key matches one we already have in state, it updates the value in state to the new value provided. If the key doesn't exist in state, it will be created with the given value.

4. What is `create-react-app`?
   4a. In which folder with create-react-app would you typically add/edit the code for your components?
   4b. What does the `index.js` file do? it imports a component and exports it.
   4c. What is the role of the `App.js` component?

5. What are the import/export statements for?

6. In your create-react-app project from yesterday, add a new component called ContactForm which accepts the following state variables: `firstName`, `lastName`, `email`, and `message`. You can initialize them with any strings you want. Render the ContactForm component to the page and display the state.

**controlled component** is when the user's input is tied to the state of the application (UI changes)

## React Component Recipe

1. Create the design for your component.
2. Within the `src` folder, create a new folder for your component containing the JS and CSS files (use Pascal-casing to name your folder and file names)
3. Bootstrap your component in the JS file with `rcc`/`rfc`/`rconst`
4. Take a look at your design. Which part of the app is changing? What data do you have to store in state?
5. Create the static version of your React component
6. Build out the functionality and dynamic parts of your component
7. Once everything is working properly, add some CSS to finish up your component
