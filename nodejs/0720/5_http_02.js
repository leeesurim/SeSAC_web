const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async function(req, res){
    try{
        const data = await fs.readFile('./5_http.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end(data);
    } catch(err){
        console.err(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(8000, function(){
    console.log("8000번 포트");
})