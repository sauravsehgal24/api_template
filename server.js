// Import server settings
const app = require('./serverConfig')
const PORT = process.env.PORT || 3000

// Server listening
app.listen(PORT, () => console.log(`Server listnening on port ${PORT}`))