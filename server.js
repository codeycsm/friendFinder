// DONT FORGET TO EXPORT YOUR FILES!!!!!
// Required packages
let express = require("express"),
  htmlRoutes = require("./app/routing/htmlRoutes"),
  apiRoutes = require("./app/routing/apiRoutes");

// Initialize express app and port to listen on.
let app = express();
let port = process.env.PORT || 80;
// express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(port);
