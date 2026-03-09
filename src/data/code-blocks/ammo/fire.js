const fireTextOnly = `target.register("/", (ammo) => {
  
  // Send a text as response with default status code 200
  
  const text = "Hello World!"; // or any other string
  ammo.fire(text);
}`

const fireJSON = `target.register("/", (ammo) => {
  
  // Send JSON — Tejas wraps it: response is { "data": { "message": "Hello World!" } }
  
  const data = { message: "Hello World!" }; // or any other JSON data
  ammo.fire(data);
})`

const fireStatusOnly = `target.register("/", (ammo) => {
  
  // Send status code with standard related message
  
  const statusCode = YOUR_STATUS_CODE; // e.g. 404, 500, 200, etc.
  ammo.fire(statusCode);
})`

const fireEmpty = `target.register("/", (ammo) => {
  
  // To send an empty response with status code 204,
  // simply call the fire method without any arguments
  
  ammo.fire();
})`

const fireWithStatusAndData = `target.register("/", (ammo) => {
  
  // 2xx → { "data": ... }, 4xx/5xx → { "error": "..." }
  
  const statusCode = YOUR_STATUS_CODE; // e.g. 404, 500, 200, etc.
  const customMessage = "Your custom message"; // or JSON data
  ammo.fire(statusCode, customMessage);
})`

const fireResponseStructure = `// Tejas wraps responses by default (recommended):
// Success (2xx):  ammo.fire(200, user)   → { "data": { ...user } }
// Error (4xx/5xx): ammo.fire(400, "Bad") → { "error": "Bad" }
// 204 / redirects: no envelope

target.register("/user", (ammo) => {
  if (ammo.GET) return ammo.fire(200, { id: 1, name: "Alice" });
  ammo.fire(400, "Method not allowed");
})`

export {
  fireTextOnly,
  fireJSON,
  fireStatusOnly,
  fireEmpty,
  fireWithStatusAndData,
  fireResponseStructure
}
