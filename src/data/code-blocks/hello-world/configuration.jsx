const configFileBasic = `{
  port: 1403,
  log: {
    http_requests: true,
    exceptions: true
  }
}`

const configFileFull = `{
  port: 1403,
  log: {
    http_requests: true,
    exceptions: true
  },
  dir:{
    targets: "targets"
  },
  db: {
    type: "mongodb",
    uri: "YOUR_MONGO_CONNECTION_STRING"
  }
}`

const configEnv = `PORT=1403

# Loggings
LOG_HTTP_REQUESTS=true
LOG_EXCEPTIONS=true

# Targets directory
DIR_TARGETS=targets

# Database
DB_TYPE=mongodb
DB_URI=YOUR_MONGO_CONNECTION_STRING`

const configConstructorArguments = `import { Tejas } from 'te.js

const options = {
  // Configuration parameters
}

const tejas = new Tejas(options);`

export {
  configFileBasic,
  configFileFull,
  configEnv,
  configConstructorArguments
}
