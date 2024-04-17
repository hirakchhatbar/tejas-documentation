const middlewareSupport = `const tejas = new Tejas();

// To add global middlewares that will be applied to all endpoints, use tejas.midair()
tejas.midair(cors());
tejas.takeoff();

// To apply middleware to all endpoints in a target, use target.midair()
const target = new Target("/user");
target.midair(myMiddleware());
`;

export default middlewareSupport;
