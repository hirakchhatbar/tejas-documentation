const createEndpoint = `import { Target } from 'te.js';
const target = new Target();

// This registers a route at "/hello and "/another-hello" that you can send requests to.
target.register("/hello", (ammo) => {
  // Your code here
});

target.register("/another-hello", (ammo) => {
  // Your code here
})`

const groupEndpoints = `import { Target } from 'te.js';

// Mention the base url in the Target constructor
const target = new Target("/user");

// This registers a route at "/user/profile" that you can send requests to.
target.register("/profile", (ammo) => {
  // Your code here
});

// This registers a route at "/user/update-password" that you can send requests to.
target.register("/update-password", (ammo) => {
  // Your code here
})`


export { createEndpoint, groupEndpoints }
