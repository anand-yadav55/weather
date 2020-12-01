const app = require('express') ();
let port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.sendFile("./src/index.html", {root:__dirname});
});
app.get('/assets/style.css', (req, res)=>{
    res.sendFile("./assets/style.css", {root:__dirname});
})
app.get('/showWeather.js', (req, res)=>{
    res.sendFile('./src/showWeather.js', {root:__dirname});
})
app.listen(port, ()=>{
    console.log("server running");
});