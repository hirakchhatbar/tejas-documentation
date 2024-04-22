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
  
  // If you only want to allow GET requests
  // This will send a 405 status code to the client
  if (!ammo.GET) return ammo.notAllowed();
  
  // Continue with the request
})`

export { unauthorized, notFound, notAllowed }
