const expressRouting = `import express from ('express');
import userRouter from './routes/user';

const app = express();

// other code
app.use('/user', userRouter);
// other code`

const expressRouteFile = `import express from ('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is a GET request');
});

router.post('/', (req, res) => {
  res.send('This is a POST request');
});

router.put('/', (req, res) => {
  res.send('This is a PUT request');
});

router.delete('/', (req, res) => {
  res.send('This is a DELETE request');
});`

const tejasAppManualTarget = `import { Tejas } from 'te.js';
import './path/to/target-file-1';
import './path/to/target-file-2';

// Just importing files is enough. You don't have to do anything else

const tejas = new Tejas();
tejas.takeOff();`

const tejasTargetFile = `import { Target } from 'te.js';
const target = new Target("/user");

target.register("/", (ammo) => {

  if (ammo.GET)
    ammo.fire("This is a GET request");
    
  if (ammo.POST)
    ammo.fire("This is a POST request");
    
  if (ammo.PUT)
    ammo.fire("This is a PUT request");
    
  if (ammo.DELETE)
    ammo.fire("This is a DELETE request");
    
})`;

export { expressRouting, expressRouteFile, tejasTargetFile, tejasAppManualTarget }
