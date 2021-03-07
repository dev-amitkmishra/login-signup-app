const { PORT } = require("./constants");
var app = require("./server");


app.listen(PORT, function() {
    console.log('Server is running on Port:', PORT);
});