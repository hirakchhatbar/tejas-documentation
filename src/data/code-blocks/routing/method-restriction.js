// Declarative: framework returns 405 + Allow header before the handler runs
const declarativeMethods = `const target = new Target('/api');

target.register('/users', { methods: ['GET', 'POST'] }, (ammo) => {
  if (ammo.GET) return ammo.fire(userService.list());
  if (ammo.POST) return ammo.fire(201, userService.create(ammo.payload));
});
// PUT, DELETE, etc. get 405 with Allow: GET, POST, HEAD (HEAD allowed when GET is)`

// Inline: ammo.only() at the start of the handler
const inlineOnly = `const target = new Target();

target.register('/health', (ammo) => {
  ammo.only('GET');  // 405 + Allow: GET if method is not GET
  ammo.fire({ status: 'ok' });
});`

export { declarativeMethods, inlineOnly }
