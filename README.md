# evem

`evem` is a simple `EventTarget` based event emitter. The following 
methods are available on the `emitter`:

* `on` - attach a listener
* `off` - remove a listener
* `once` - attach a listener to listen only once
* `emit` - dispatch an event with optional custom payload

The original `emitter` instance is exported as well for those just in 
case scenarios. The only reason this package exists is so that code 
duplication may be prevented. Otherwise, I end up recreating these in 
every other library project.

# Usage

Use it simply as:

```js
import evem from 'evem'

function handler(e) {
    console.log('received an event with payload: ', e);
}

evem.on('my-custom-event', handler);
evem.emit('my-custom-event'); // this prints the console message
```

# License

[MIT](https://github.com/sangupta/evem/blob/main/LICENSE) License. Copyright (c) 2022, Sandeep Gupta.
