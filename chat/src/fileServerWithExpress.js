const app = require('express')()
const http = require('http').Server(app)


const hostname = '127.0.0.1'
const port = 3000

app.get('/', (req,res) =>
res.sendFile(__dirname + '/sample.html')
);

app.get('/text/', (req, res) => {
    res.send('Plain text\n')
});

app.get('/text2/', (req, res) => {
    res.send('hello world\n')
});

app.get('/text3/', (req, res) => {
    res.send('hello worldik\n')
});

app.get('/text4/', (req, res) => {
    res.send('hello worldishe\n')
});

app.get('/text5/', (req, res) => {
    res.send('hello мир\n')
});


http.listen(port, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});