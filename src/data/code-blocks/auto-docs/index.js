const quickStartBash = `# Generate an OpenAPI spec interactively
npx tejas generate:docs`

const quickStartServe = `// Serve the generated docs in your app
app.serveDocs({ specPath: './openapi.json' });
app.takeoff();`

const endpointMetadata = `users.register('/', {
  summary: 'User operations',
  description: 'Create and list users',
  methods: ['GET', 'POST'],
  request: { name: { type: 'string', required: true }, email: { type: 'string', required: true } },
  response: { 200: { description: 'Success' }, 201: { description: 'User created' } }
}, (ammo) => {
  // handler
});`

const llmConfigJson = `{
  "docs": {
    "llm": {
      "baseURL": "https://api.openai.com/v1",
      "apiKey": "sk-...",
      "model": "gpt-4o-mini"
    }
  }
}`

export { quickStartBash, quickStartServe, endpointMetadata, llmConfigJson }
