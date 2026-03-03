const install = `npm install te.js`

const tejasFly = `# Use automatic entry point resolution
npx tejas fly

# Specify an entry file explicitly
npx tejas fly src/server.js`

const generateDocs = `npx tejas generate:docs`

const generateDocsCi = `npx tejas generate:docs --ci`

export { install, tejasFly, generateDocs, generateDocsCi }
