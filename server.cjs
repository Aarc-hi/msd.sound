const http=require('http'),fs=require('fs'),path=require('path');
const types={'.html':'text/html','.jpg':'image/jpeg','.js':'text/javascript','.mp3':'audio/mpeg','.wav':'audio/wav','.ogg':'audio/ogg','.m4a':'audio/mp4'};
http.createServer((q,r)=>{const f=path.join(__dirname,q.url==='/'?'index.html':q.url.split('?')[0]);
fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);return r.end()}r.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});r.end(d)})}).listen(3200);
