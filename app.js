const app = require('express') ();
app.post('/getWeather',(req, res)=>{
const PORT = process.env.PORT;
});
app.get('/', (req, res)=>{
    res.sendFile("./src/index.html", {root:__dirname});
});
app.get('/assets/style.css', (req, res)=>{
    res.sendFile("./assets/style.css", {root:__dirname});
})
app.get('/showWeather.js', (req, res)=>{
    res.sendFile('./src/showWeather.js', {root:__dirname});
})
app.listen(PORT, ()=>{
    console.log("server running");
});