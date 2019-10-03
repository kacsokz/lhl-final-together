export default {
  API_PATH: {
    development: 'http://localhost:3000',
    production: 'https://together-lhl-api.herokuapp.com'
  }[process.env.NODE_ENV || 'development']
}