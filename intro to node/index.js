import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import chalk from 'chalk';
import fs from 'fs';
const app = express();
const port  = process.env.PORT || 8080;

app.use(express.static('./views'));

// app.get('/',function(req,res){
//     res.status(200).send('<h1>Welcome to the server</h1>')
// })


app.get('/search/:query',function(req,res){
    let query = req.params.query;
    fs.appendFile('./query.txt',`Query: ${query} \n`,function(error){
        if(error){throw new Error(error)}
        console.log(chalk.green('file updated'));
        res.status(200).send(`Your serched query is:  ${query}`);
    })
})


app.get('*',function(req,res){
    res.status(404).send('<h1 style="color:red;text-align:center">404 page not found</h1>')
})

app.post('/',function(req,res){
    res.status(200).send('<h1>post request</h1>')
})


app.listen(port,function(error){
    if(error){throw new Error(error)}
    console.log(chalk.green(`server is running on port ${port}`));
})









































// // not writing javaScript code but node js code
// console.log('hello there');
// import { Random } from 'random';
// import chalk from 'chalk';
// import fs from 'fs';
// import asim from './operations/sum.js';
// import random from 'random'
// import http from 'http';
// let server = http.createServer(function(req,res){
//     let url = req.url;
//     if(url==='/'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end('<h1>Welcome to the server</h1>');
//     }
//     else if(url==='/about'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end('<h1>about page</h1>');
//     }
//     else{
//         res.writeHead(404,{'Content-Type':'text/html'});
//         res.end('<h1 style="color:red">404 page not found</h1>');
//     }
// });


// server.listen(8080,function(error){
//    if(error){throw new Error(error)}
//    console.log(chalk.green('server is running on port 8080'));
// });





// modules in nodejs

// type of modules in nodejs
// 3. custom modules
// console.log(asim(5,4,3,2,1));
// console.log(random.int(5,50));

// console.log(chalk.red('server is running on port 8080'));
// 2. third party modules
// 1. core modules or build in modules

// fs module


// async func and asnc func

// fs.writeFile('./notes.txt','html stands for hyper text markup language \n',function(error){
//     if(error){throw new Error(error)}
//     console.log(chalk.green('file created'));
// })

// fs.writeFileSync('./notes.txt','css stands for cascading style sheet \n');

// write

//read files

// let data = fs.readFileSync('./notes.txt','utf-8');
// console.log(data);

// fs.readFile('./notes.txt','utf-8',function(error,data){
//     if(error){throw new Error(error)}
//     console.log(data);
// })




// update

// fs.appendFile('./notes.txt','html stands for hyper text markup language \n',function(error){
//     if(error){throw new Error(error)}
//     console.log(chalk.green('file updated'));
// });

// fs.appendFileSync('./notes.txt','css stands for cascading style sheet \n');
////
//
//


// read
// delete

// fs.rename('./notes.txt','data.txt',function(error){
//     if(error){throw new Error(error)}
//     console.log(chalk.green('file renamed'));
// })



// fs.unlink('./data.txt',function(error){
//     if(error){throw new Error(error)}
//     console.log(chalk.green('file deleted'));
// })
