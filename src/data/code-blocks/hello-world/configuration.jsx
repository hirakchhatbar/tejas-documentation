const configFileBasic = `{
  "port": 1403,
  "log": {
    "http_requests": true,
    "exceptions": true
  }
}`

const configFileFull = `{
  "port": 1403,
  "log": {
    "http_requests": true,
    "exceptions": true
  },
  "dir": {
    "targets": "targets"
  },
  "db": {
    "type": "mongodb",
    "uri": "YOUR_MONGO_CONNECTION_STRING"
  },
  "errors": {
    "llm": {
      "enabled": true,
      "baseURL": "https://api.openai.com/v1",
      "model": "gpt-4o-mini",
      "messageType": "endUser"
    }
  }
}`

const configEnv = `PORT=1403

# Logging
LOG_HTTP_REQUESTS=true
LOG_EXCEPTIONS=true

# Targets directory
DIR_TARGETS=targets

# Database
DB_TYPE=mongodb
DB_URI=YOUR_MONGO_CONNECTION_STRING

# Optional: errors.llm (LLM-inferred errors for ammo.throw())
ERRORS_LLM_ENABLED=true
ERRORS_LLM_MESSAGE_TYPE=endUser
# Or use LLM_* for shared config: LLM_BASE_URL, LLM_API_KEY, LLM_MODEL`

const configConstructorArguments = `import Tejas from 'te.js';

const options = {
  // Configuration parameters
};

const app = new Tejas(options);`

export {
  configFileBasic,
  configFileFull,
  configEnv,
  configConstructorArguments
}
