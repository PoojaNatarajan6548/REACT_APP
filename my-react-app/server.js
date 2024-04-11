const corsAnywhere = require('cors-anywhere');

const PORT = process.env.PORT || 5003;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(PORT, () => {
  console.log(`CORS Anywhere server is running on port ${PORT}`);
});
