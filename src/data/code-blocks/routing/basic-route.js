const basicRoute = `import { Tejas, Target } from 'tejas';

const target = new Target();
target.register('/hello', (ammo) => {
  // Your code here
  ammo.fire('Hello, World!');
});

const tejas = new Tejas();
tejas.takeOff()`

export default basicRoute;