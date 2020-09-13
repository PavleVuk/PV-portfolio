const express = require('express');
const cors = require ('cors');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.post('/sendMail', (req, res)=>{
    console.log("email receiver:", req.body.email);
res.send("email sent");
})

app.listen(port, ()=>{
    console.log("app listening on port",port);
})