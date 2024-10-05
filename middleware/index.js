const fs = require('fs');

function logReqRes(fileName) {
    return (req, res , next) => {
        fs.appendFile(
            fileName,
            `\n${Date.now()}: ${req.method}: ${req.path}`,
            (error, data)=>{
              next()
            }
          )
    } 
}

module.exports = {
    logReqRes,
}