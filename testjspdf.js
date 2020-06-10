// const jsPDF = require('jspdf');

// var doc = new jsPDF()

// doc.text('Hello world!', 10, 10)
// doc.save('a4.pdf')
// var express    = require('express')
// var serveIndex = require('serve-index')

// var app = express()

// // Serve URLs like /ftp/thing as public/ftp/thing
// // The express.static serves the file contents
// // The serveIndex is this module serving the directory
// app.use('/texlive.js', express.static('texlive.js/index.html'), serveIndex('texlive.js/index.html', {'icons': true}))

// // Listen
// app.listen(3000)

// const pdflatex = require('./texlive.js/pdftex')

var fs = require('fs');

// file is included here:
eval(fs.readFileSync('./texlive.js/pdftex.js')+'');
// eval(fs.readFileSync('./texlive.js/promisejs/promise.js')+'');

// import {promise} from '/texlive.js/promisejs/promise'

// var onready = new promise.Promise();

const path = require('path')
const Promise = require('promise');

const {Worker,isMainThread} = require('worker_threads');
if (isMainThread) {
//   const worker = new Worker(__filename);  


console.log('make a worker: ', path.resolve(__dirname, 'texlive.js/pdftex-worker.js'))

// var worker = new Worker(path.resolve(__dirname, 'texlive.js/pdftex-worker.js'));

var pdftex = new PDFTeX(path.resolve(__dirname, 'texlive.js/pdftex-worker.js'));
var latex_code = "" +
  "\\documentclass{article}" +
  "\\begin{document}" +
  "\\LaTeX is great!" +
  "$E = mc^2$" +
  "\\end{document}";

pdftex.compile(latex_code)
      .then(function(pdf) { window.open(pdf) });
}
