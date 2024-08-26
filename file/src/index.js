/*
 * @Author: your name
 * @Date: 2021-08-19 10:17:18
 * @LastEditTime: 2021-11-18 13:45:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \file-transfer\src\fileServer.js
 */
const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const app = express()
const upload = multer({
    dest: 'uploads/'
})

if (!fs.existsSync('./static')) {
    fs.mkdirSync('./static')
}

app.all('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS,GET')
    res.setHeader('Access-Control-Allow-Credentials','true')
    // res.setHeader('Access-Control-Max-Age','1800')
    res.setHeader('Access-Control-Allow-Headers', 'token,mchannelId')
    if(req.method == 'OPTIONS'){
        res.send('发送成功 OK')
    }
    next()
})
app.use(upload.any())
app.use(express.static(path.resolve('static')))
app.get('/upload', (req, res) => {
    let rf = fs.readFileSync('src/nonono.html', 'utf8')
    res.send(rf)
})
app.post('/upload', (req, res) => {
    if (req.files[0]) {
        let extName = req.files[0].originalname
        fs.rename(req.files[0].path, path.join(req.files[0].destination, extName), (err) => {
            console.log(err);
            if (err) {
                res.send('上传失败...')
            } else {
                res.send('上传成功~')
            }
        })
    } else {
        fs.writeFileSync(`./logs/log.txt`, req.body.content)
        res.send('发送成功 OK')
        console.log(req.body);
    }
})
app.get('/download', function (req, res) {
    let files = fs.readdirSync(path.resolve('static'))
    let template = fs.readFileSync('src/filelist.html').toString().replace("\'fileListHere\'", JSON.stringify(files))
    res.send(template)
})
const PORT = 7770
app.listen(PORT, () => {
    console.log(`\x1b[32mYour File Server is Running at:   \x1b[47m\x1b[30mhttp://localhost:${PORT}/upload\n\x1b[0m`);
    console.log('\x1b[32mHave a good trip!\x1b[0m');
})