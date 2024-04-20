const expressRouting = `import express from ('express');
import userRouter from './routes/user';

const app = express();

// other code
app.use('/user', userRouter);
// other code`

const expressRouteFile = `import express from ('express');
const router = express.Router();

// Your endpoints here

export default router;`

const tejasAppManualTarget = `import { Tejas } from 'te.js';
import './path/to/target-file-1';
import './path/to/target-file-2';

// Just importing files is enough. You don't have to do anything else

const tejas = new Tejas();
tejas.takeOff();`

const tejasTargetFile = `import { Target } from 'te.js';
const target = new Target("/user");

// Your endpoints here
// No need to export anything`;

export { expressRouting, expressRouteFile, tejasTargetFile, tejasAppManualTarget }
