// © 2026 Jared Cluff. Loopback-only server for the fictional worked example.
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
const assets=new Map(['index.html','style.css','app.mjs','core.mjs'].map(name=>['/'+name,new URL('../examples/shift-garden/'+name,import.meta.url)]));
const types={html:'text/html',css:'text/css',mjs:'text/javascript'};
const server=createServer(async(req,res)=>{
  if(req.method!=='GET'){res.writeHead(405).end();return;}
  const pathname=new URL(req.url,'http://127.0.0.1').pathname;
  if(pathname==='/EXAMPLE_PROJECT.html'){res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'}).end(await readFile(new URL('../EXAMPLE_PROJECT.md',import.meta.url)));return;}
  const file=assets.get(pathname==='/'?'/index.html':pathname);
  if(!file){res.writeHead(404).end('Not found');return;}
  try{res.writeHead(200,{'Content-Type':types[file.pathname.split('.').pop()]+';charset=utf-8','Cache-Control':'no-store'}).end(await readFile(file));}catch{res.writeHead(500).end('Example file unavailable');}
});
server.on('error',error=>{console.error(error.message);process.exitCode=1;});
server.listen(4175,'127.0.0.1',()=>console.log('Shift Garden: http://127.0.0.1:4175/ — Ctrl+C to stop. Guide is served as plain text locally.'));
