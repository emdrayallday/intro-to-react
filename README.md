# React

React is split up into different rendering layers. React-dom and React-native

# Prettier

Let this tool handle all of code styling for you

```
$ yarn add global prettier

```

Preview example in CLI

```
prettier --single-quote --print-width-120 ClientApp.jsx
```

Apply styles to file with --write

```
prettier --single-quote --print-width-120 --write ClientApp.jsx
```

# Webpack

At it's simplest, it packages several files to one file (combining and minifying)

# Babel

Transforms jsx and es6 to to plain javascript or vanilla js. plus much other things

# React Router
## Hash Router
<HashRouter> is a Higher Order component -- It doesn't rende anything itself out, it does routing and then the route will render a component
## Route
Takes attributes exact, path, component
exact has to match path exactly, : will make dynamic path
<Route path="/:language/search" component={Search} >
## Switch
Will only render one component, whatever it matches first
# key
need a unique key, don't use index b/c when the array is reordered the index will change.

This is used so react doesn't have to rerender everything, if you sort something it will only move the unique key

# Props
child gets what it gets, props are immutable

# state
-- untracked input -- react is not keeping track of state

a component can have it's own state, but only change it's own state.

must use es6 class component