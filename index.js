// Nodemon is the tool that helps node.js applications by automatically restarting
// the application when there is any chamge in the code.

//file system module to read files
const fs = require('fs');  

//http module to create webserver
const http = require('http');  

// url module for routing
// routing - different response for different urls
const url = require('url');

// read the file
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
// utf-8 is character encoding

// parse json data
const laptopData = JSON.parse(json);

// create server - callback function which fires everytime someone accesses 
// this web server
const server = http.createServer((req, res) => {

  //parse the url
  const pathName = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;

  // PRODUCTS OVERVIEW
  if(pathName === '/products' || pathName === '/'){
    //http header
    res.writeHead(200, { 'content-type':'text/html' });
    
    fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
      let overviewOutput = data;
      
      fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (err, data) => {
        const cardsOutput = laptopData.map(el => replaceTemplate(data, el)).join('');
        overviewOutput = overviewOutput.replace('{%CARDS%}', cardsOutput);
        res.end(overviewOutput);
    });

  });
}
  // LAPTOP DETAIL
  else if (pathName === '/laptop' && id < laptopData.length) {
    res.writeHead(200, { 'content-type':'text/html' });

    fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {
      const laptop = laptopData[id];
      const output = replaceTemplate(data, laptop);
      res.end(output);
    });
  }

  // IMAGES
  else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)){
      fs.readFile(`${__dirname}/data/images${pathName}`, (err, data) => {
        res.writeHead(200, { 'content-type':'image/jpg' });
        res.end(data);
      });
  }


  // URL NOT FOUND
  else {
    res.writeHead(404, { 'content-type':'text/html' });
    res.end('URL was not found on the server');
  }

});

// server - keep listens on a specific port on specific IP
server.listen(1337, '127.0.0.1', () => {
  console.log('Listen');
});

function replaceTemplate(originalHtml, laptop) {
  let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
  output = output.replace(/{%IMAGE%}/g, laptop.image);
  output = output.replace(/{%PRICE%}/g, laptop.price);
  output = output.replace(/{%SCREEN%}/g, laptop.screen);
  output = output.replace(/{%CPU%}/g, laptop.cpu);
  output = output.replace(/{%STORAGE%}/g, laptop.storage);
  output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
  output = output.replace(/{%ID%}/g, laptop.id);
 return output;
}

// just to write unit test case
var exports=module.exports={};
exports.AddNumber=function(a,b)
{
return a+b;
};
