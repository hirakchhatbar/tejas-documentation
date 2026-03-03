const data = [
  { title: 'Quick Start', link: '#quick-start', subItems: [
    { title: 'Redis', value: 'redis', link: '#redis' },
    { title: 'MongoDB', value: 'mongodb', link: '#mongodb' },
    { title: 'Both Together', value: 'both-together', link: '#both-together' }
  ]},
  { title: 'Redis Configuration', link: '#redis-configuration', subItems: [
    { title: 'Basic Connection', value: 'redis-basic', link: '#redis-basic' },
    { title: 'With Authentication', value: 'redis-auth', link: '#redis-auth' }
  ]},
  { title: 'MongoDB Configuration', link: '#mongodb-configuration', subItems: [
    { title: 'Basic Connection', value: 'mongo-basic', link: '#mongo-basic' },
    { title: 'MongoDB Atlas', value: 'mongo-atlas', link: '#mongo-atlas' }
  ]},
  { title: 'Using Database Connections', link: '#using-connections', subItems: [
    { title: 'Getting Connections', value: 'getting-connections', link: '#getting-connections' },
    { title: 'In Route Handlers', value: 'route-handlers', link: '#route-handlers' }
  ]},
  { title: 'Database Manager API', link: '#database-manager-api' },
  { title: 'Best Practices', link: '#best-practices' }
]

export default data
