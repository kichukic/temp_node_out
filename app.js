const { readFile, writeFile} =  require('fs')

readFile('./kichu/subkichu/new2.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./kichu/new1.txt',"utf-8",(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        second = result;
        writeFile('./kichu/result-async.txt',`here is the result ${first},${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})