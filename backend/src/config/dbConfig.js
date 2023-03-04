const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const dbconfig = 'mongodb+srv://Lucas_Lad:Luc210701@cluster0.scet4yb.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbconfig, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

module.exports = connection;