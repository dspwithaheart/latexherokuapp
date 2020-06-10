// server.js
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(serveStatic(__dirname + "/dist"));

// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);



const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')


const { PORT = 8080 } = process.env
const fs = require("fs");
const path = require('path')
const { execSync } = require('child_process');

// For Serving static content
const serveStatic = require('serve-static');
app.use(serveStatic(__dirname + "/dist"));

app.use(bodyParser.json())

app.options('*', cors());

var jobTitle = 'Software Entwickler'

// var filePath =("C:/Users/Aayush/Desktop/Job Bewerbung/variables.tex") 
var filePath =("/home/aayush/Documents/Job Bewerbung/variables.tex")

// console.log(path.basename(filePath))
// fs.readFile(filePath, function(err, buf) {
//     console.log(buf.toString());
//   });

// fs.writeFile(filePath, data, (err) => {
//   if (err) console.log(err);
//   console.log("Successfully Written to File.");
// });

var texPath = 'C:\Users\Aayush\Desktop\Job Bewerbung'

// Send Mail using Powershell
app.post('/ps_SendMail', cors(), function(req, res, next) {
    let body = req.body
    console.log(body)
    res.sendStatus(200)
    console.log("sending mail")
    // execSync('ls')
    var send_out = execSync(`Powershell.exe -File sendmail.ps1 "${body.email}" "${body.subject}" "${body.anrede}" "${body.jobTitle}" "${body.type}"`).toString()
    console.log(send_out)
  });

  function compileLatex (param) {
    console.log("Compiling Latex")
    execSync(`bash shellLatex.sh ${param}`)

    // execSync(`start batchLatex.bat ${param}`)
  };

  app.post('/compileLatex', cors(), function(req, res, next) {
    let body = req.body
    console.log(body)
    var data = `\\newcommand\\Subject{${body.jobTitle}}\n\\newcommand\\Company{${body.company}}\n\\newcommand\\Address{${body.address}}\n\\newcommand\\City{${body.city}}\n\\newcommand\\Anrede{${body.anrede}}\n\\newcommand\\Gehltsvorstellung{${body.gehaltsvorstellung}}`

   
   fs.writeFile(filePath, data, (err) => {
      if (err){console.log(err);}
      else{
        console.log("Successfully Written to File.");
        console.log('exec')
        compileLatex(body.type)
      }
    });
   res.sendStatus(200)
   const dateTime = new Date(Date.now());
   var logData = `\n\nType{${body.type}}\nSubject{${body.jobTitle}}\nCompany{${body.company}}\nAddress{${body.address}}\n\City{${body.city}}\n\Anrede{${body.anrede}\n\Date{${dateTime.toString()}}`
   fs.appendFile('Application.log', logData, (err) => {
    console.log("Successfully Logged to File.");
   })
  //  execSync('start batchLatex.bat')
  });

// Go
app.listen(PORT, () => console.log(`App running on port ${PORT}!`))

// timeout /t 30
// cd "C:\Users\Aayush\Desktop\Job Bewerbung\"
// sell
