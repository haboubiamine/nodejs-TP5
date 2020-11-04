const http = require('http');
const url = require('url');
const fs = require('fs');
const port='3000';
const server = http.createServer();


server.on('request',function (req, res) {
    const query = url.parse(req.url, true).query;
    const name = query.name === undefined ? "foulen": query.name ;
    console.log(query.name);


    fs.readFile('index.html', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        data = data.replace('{{name}}',name);
        res.end(data);
      })
    
    
    });



server.listen(port , ()=> {console.log("server runnig on "+port)});