const reqAndRes = `target.register("/", (ammo) => {
  // To access req (http.IncomingMessage) and res (http.ServerResponse) objects
  const req = ammo.req;
  const res = ammo.res;
  
  // These can be used to implement custom logic as needed. For eg:
  req.on('data', (chunk) => {
    console.log(chunk);
  }
  
  const contentTypeHeader = { 'Content-Type': contentType };
  const statusCode = 200;
  res.writeHead(statusCode, contentTypeHeader);
  res.write(JSON.stringify({ message: 'Hello, World!' }));
  res.end();
)`

const headers = `target.register("/", (ammo) => {
  // To access the headers of the incoming request
  const headers = ammo.headers;
  // Eg:
  const contentType = headers['content-type'];
  const token = headers['authorization'];
  
  // Developers can inspect, modify, and set headers as needed
  // For eg:
  headers['x-custom-header'] = 'custom-value';
})`

const payload = `target.register("/", (ammo) => {
  // To access the body of the incoming request
  const payload = ammo.payload;  
  
  // Eg: POST request with JSON body { "name": "John", "age": 25 }
  // or GET request with query params ?name=John&age=25
  // or POST request with form data name=John&age=25
  // or POST request with multipart form data
  const name = payload.name;
  const age = payload.age;
  
  // Eg: POST request with JSON body { "name": "John", "age": 25 } and query params ?city=New York
  const name = payload.name;
  const age = payload.age;
  const city = payload.city;
}`

const ip = `target.register("/", (ammo) => {
  // To access the IP address of the incoming request
  const ip = ammo.ip;
  console.log(ip);
}`

const method = `target.register("/", (ammo) => {
  // To access the HTTP method of the incoming request
  const method = ammo.method;
  
  // To check if the incoming request is a particular method
  if (ammo.GET)
    console.log('GET request');
  else if (ammo.POST)
    console.log('POST request');
  else if (ammo.PUT)
    console.log('PUT request');
  else if (ammo.DELETE)
    console.log('DELETE request');
  else if (ammo.PATCH)
    console.log('PATCH request');
  else if (ammo.HEAD)
    console.log('HEAD request');
  else if (ammo.OPTIONS)
    console.log('OPTIONS request'); 
}`

const others = `target.register("/", (ammo) => {
  // To access the protocol of the incoming request
  const protocol = ammo.protocol;
  console.log(protocol); // http or https
  
  // To access the hostname of the incoming request
  const hostname = ammo.hostname;
  console.log(hostname); // Eg: www.example.com
  
  // To access the path of the incoming request
  const path = ammo.path;
  console.log(path); // Eg: /api/v1/users?name=John
  
  // To access the endpoint of the incoming request
  const endpoint = ammo.endpoint;
  console.log(endpoint); // Eg: /api/v1/users
  
  // To access the full URL of the incoming request
  const fullURL = ammo.fullURL;
  console.log(fullURL); // Eg: https://www.example.com/api/v1/users?name=John
})`

export { reqAndRes, headers, payload, ip, method, others }
