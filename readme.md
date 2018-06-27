# IFramed React app with bi-directional communication

## Notes

Demonstrates a method of communicating with a nested React app in a secure manner using `postMessage`.

On load, both the parent window, `parent.html`, and React app container, `App.js`, bind a `message` event listener. In `App.js`'s `componentDidMount` function, `window.parent.postMessage` signals the parent window that the app is ready to accept messages. The parent then sends a sample object payload.

Use `npm start` to run the React development server, then open `parent.html`. The results should be output to the browser dev console.
