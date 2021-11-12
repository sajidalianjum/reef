# Reef
A lightweight library for creating reactive, state-based components and UI. Reef is a simpler alternative to React, Vue, and other large frameworks.

**This is an in-development version of Reef v11.x.** It has bugs, quirks, and the API may change significantly. 

## Getting Started

Reef works without any build step. [The CDN is the fastest and simplest way to get started.](https://cdn.jsdelivr.net/gh/cferdinandi/reef@next/dist/reef.js)

```html
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/reef@next/dist/reef.js"></script>
```

You can also use ES imports if you'd prefer.

```js
import * as reef from 'https://cdn.jsdelivr.net/gh/cferdinandi/reef@next/dist/reef.es.js';
```



## API

Reef includes a handful of tree-shakeable methods that make updating the UI a little bit easier. 

```js
// tree-shakeable imports with ES modules
import {store, diff} from './reef.js';
````

If you're using the browser-ready version, you can use object destructuring to assign them to individual variables, or run them on the `reef` object.

```js
// object destructuring in the browser
let {store, diff} = reef;

// calling methods on the reef object
reef.store();
reef.diff();
````

### `store`

Creates a reactive data store. When you associate it with components, they'll automatically render whenever the data changes.

Pass in any type of data.

```js
let user = store({
	name: 'Merlin',
	job: 'wizard'
});
let todos = store(['Eat', 'Sleep', 'Work', 'Play']);
let count = store(42);
```

You can access and update store data using the `$` property.

```js
user.$.age = 'Very old!';
todos.$.push('Start over');
count.$ = 0;
```

#### Setter functions

As an optional second argument, you can also pass in an object of _setter functions_. If used, your store data becomes immutable and non-reactive when accessed directly.

The first argument on a setter function is the store properties. You can assign any number of additional parameters.

```js
let todos = store(['Eat', 'Sleep', 'Work', 'Play'], {
	addTodo: function (props, todo) {
		props.push(todo);
	}
});
```

Run a setter function using the `Store.do()` method. Pass in the name of the setter as the first argument, and any additional parameters after that.

```js
// Updates todos.$ and reactively updates
todos.do('addTodo', 'Take a power nap');
```

_More coming soon..._