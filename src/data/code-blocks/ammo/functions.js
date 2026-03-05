const unauthorized = `target.register("/", (ammo) => {
  
  const isAuthorized = YOUR_CODE_HERE();
  
  // This will send a 401 status code to the client
  if (!isAuthorized) return ammo.unauthorized();
  
  // If the user is authorized, continue with the request
})`

const notFound = `target.register("/", (ammo) => {
  
  // This will send a 404 status code to the client
  return ammo.notFound();
})`

const notAllowed = `target.register("/", (ammo) => {
  
  // Allow only GET and POST; pass methods to set Allow header (RFC-compliant 405)
  if (!ammo.GET && !ammo.POST) return ammo.notAllowed('GET', 'POST');
  
  // Continue with the request
})`

const only = `target.register("/health", (ammo) => {
  ammo.only('GET');  // 405 + Allow: GET if method is not GET
  ammo.fire({ status: 'ok' });
})`

export { unauthorized, notFound, notAllowed, only }
