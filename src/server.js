import http from 'http'
const processId = process.pid

const server = http.createServer((request, response) =>{
    for(let index = 0 ;index < 1e7; index++);
    response.end(`hendled by pid: ${processId}`)
})

server.listen(3000)
    .once('listening',()=>{
        console.log('Server startin in process',processId)
    }) 

    //Aguardar as conexoes seremencerradas para depois encerar o programa
process.on('SIGTERM',()=>{
    console.log("Server ending", new Date().toISOString())
    server.close(() =>process.exit())
})