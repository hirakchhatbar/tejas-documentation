const methodFreeRouting = `import { Target } from 'te.js';
const target = new Target();

target.register('/hello-get', (ammo) => {
// If you want to block certain methods on a route, you can do so by checking the method
if (!ammo.GET) return ammo.notAllowed();

// Regardless of method, all your query parameters and request data is available in ammo.payload
const payload = ammo.payload;
if (ammo.POST) return postController(ammo, payload);

// Default response for methods that are not handled
ammo.fire({
    status: 200,
    body: 'Default response',
  });
});`;
export default methodFreeRouting;
