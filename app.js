/**
 * Whatsapp Direct Messaging API
 * Author: Amirul Zharfan Zalid
 * Web: amirulzharfan.com
 */

/***************************************/
/*******       Dependencies      *******/
/***************************************/
var express = require('express');
var app = express();
var useragent = require('express-useragent');
const port = process.env.PORT || 5000;

/***************************************/
/*******         Router          *******/
/***************************************/

/*
 * http://<domain>
 * Desciption: Main page
 */
app.get('/quote', (req, res) => {
        const quotes = [
                "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
                "Makan hanya untuk orang lemah",
                "Payah kang sate",
                "Sa ae cubluk",
                "Sa ae kang indomie",
                "Sa ae jagung",
                "Sa ae kupluk",
                "Keep in si ketimun laut",
                "Melendoy",
                "Swadikap",
                "Makanya, kalau ada kotak amal diisi, jangan dilewatin doang",
                "Ajab kurang amal",
                "Tragedy jekuei",
                "Namanya umur gada yang tau",
                "Sudoku dan Boggle is my enemy",
                "Asada, samalo, semua",
                "Toy, letoy letoy letoy",
                "Matamu"
        ]
        const randNumber = Math.floor(Math.random() * quotes.length-1);
        res.status(200).json(quotes[randNumber]);
})

/*
 * http://<domain>/:phonenum
 * Desciption: Redirect url to respective whatsapp api interface without message text
 
app.get('api/:phonenum', (req, res) => {
    var source = req.header('user-agent');
    var ua = useragent.parse(source);

    if (ua.isDesktop) {
        res.status(308).redirect(`https://web.whatsapp.com/send?phone=+${req.params.phonenum}`);
    } else if (ua.isMobile) {
        res.status(308).redirect(`whatsapp://send?phone=+${req.params.phonenum}`);
    } else {
        res.status(400).json({status: "error"});
    }
})

/*
 * http://<domain>/:phonenum/:message
 * Desciption: Redirect url to respective whatsapp api interface with message text
 
app.get('/:phonenum/:message', (req, res) => {
    var source = req.header('user-agent');
    var ua = useragent.parse(source);

    if (ua.isDesktop) {
        res.status(308).redirect(`https://web.whatsapp.com/send?phone=+${req.params.phonenum}&text=${req.params.message}`);
    } else if (ua.isMobile) {
        res.status(308).redirect(`whatsapp://send?phone=+${req.params.phonenum}&text=${req.params.message}`);
    } else {
        res.status(400).json({status: "error"});
    }
})

/*
 * http://<domain>/whatsapp
 * Desciption: Redirect url to respective whatsapp api interface using predefined phone number
 
app.get('/whatsapp', (req, res) => {
    var source = req.header('user-agent');
    var ua = useragent.parse(source);
    var phonenum = '0123456789';
    
    if (ua.isDesktop) {
        res.status(308).redirect(`https://web.whatsapp.com/send?phone=+${phonenum}`);
    } else if (ua.isMobile) {
        res.status(308).redirect(`whatsapp://send?phone=+${phonenum}`);
    } else {
        res.status(400).json({status: "error"});
    }
}) */

// Start server at <port>
app.listen(port, (err) => {
    console.log(`Available at http://localhost:${port}`);
    if (err) {
        console.log(err);
    }
})
