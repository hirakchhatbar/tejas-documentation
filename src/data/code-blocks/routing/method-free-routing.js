const methodFreeRouting = `import { Target } from 'te.js';
const target = new Target('/user');

target.register('/', (ammo) => {

  if (ammo.GET) {
    // Your logic here
    return ammo.fire(data);
  }
  
  if (ammo.POST) {
    // Your logic here
    return ammo.fire(data);
  }
  
  // For any other methods:
  return ammo.notAllowed();
});`

export default methodFreeRouting