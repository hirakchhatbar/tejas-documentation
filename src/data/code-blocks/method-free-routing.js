const methodFreeRouting = `target.register('/hello-get', (ammo) => {
// If you want to block certain methods on a route, you can do so by checking the method
if (!ammo.GET) return ammo.notAllowed();
if (ammo.POST) return postController();

ammo.fire({
    status: 200,
    body: 'Default response',
  });
});`;
export default methodFreeRouting;
