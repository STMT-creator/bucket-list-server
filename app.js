const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); // json pasring
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => { // 버킷리스트를 수신
  res.send('Hello World!')
})

app.post('/', (req, res) => { // 버킷리스트 항목을 송신
    console.log(req.body.bucket_text); //console.log() 는 출력하는 명령어 req.body 폼을 통해서 보내온 데이터를 바디에서 확인?
    res.send('Got a POST request')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})