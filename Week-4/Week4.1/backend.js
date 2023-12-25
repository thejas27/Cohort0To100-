const express = require('express');
const app = express();

app.get('/sum', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a+ b;
    res.json(sum);
})

app.get('/intrest', function(req, res){
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    const intrest = (principal * rate * time)/100;
    const totalamount = principal + intrest;
    res.json({
        Amount: totalamount,
        Intrest: intrest,
    });
});

app.listen(3000);