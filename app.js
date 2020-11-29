const app = require('express') ();
app.post('/getWeather',(req, res)=>{

});
app.get('/', (req, res)=>{
    res.sendFile("./src/index.html", {root:__dirname});
});
app.get('/assets/style.css', (req, res)=>{
    res.sendFile("./assets/style.css", {root:__dirname});
})
app.listen("3000", ()=>{
    console.log("server running");
});