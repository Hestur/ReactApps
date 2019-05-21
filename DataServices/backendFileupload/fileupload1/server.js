const express = require('express')
const Upload = require('./upload')
const cors = require('cors')
const FileRoute = express.Router();
const PORT = 8000;


const server = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.post('/', Upload)


FileRoute.route('/').get(function(req, res){
    Upload.find(function(err, j){
        if(err){
            console.log("error", err);
        } else {
            console.log('lort')
            res.json(j);
        }
    })
})

server.listen(8000, () => {
  console.log('Server started!')
})
server.use('/Upload', FileRoute);

server.listen(PORT, function(){
    console.log("server running at port: " + PORT);
})