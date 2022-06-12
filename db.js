const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://admin:nKM7dpPfkGFLumAq@cluster0.dkqwk3t.mongodb.net/geolocapp?retryWrites=true&w=majority"
const connectToMongo = ()=>{
mongoose.connect(mongoURI, ()=>{
console.log("Connected  Mongo is not Successfully");
})
}
module.exports = connectToMongo;

//mongodb://localhost:27017/geolocapp?readPreference=primary&appname=MongoDB%20Compass&ssl=false