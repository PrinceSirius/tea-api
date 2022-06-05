const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
// Network request

const tea ={
    'oolong':{
        'type': 'black',
        'waterTemp': '200',
        'steepTime':'8 mins',
        'caffineLevel':'medium',
        'flavor':'blueberry'

    },
    'matcha':{
        'type': 'black',
        'waterTemp': '230',
        'steepTime':'3 mins',
        'caffineLevel':'high',
        'flavor':'honey greenTea'

    },
    'unknown':{
        'type': 'unknown',
        'waterTemp': 'unknown',
        'steepTime':'unknown',
        'caffineLevel':'unknown',
        'flavor':'unknown'

    }
}

app.get('/', (request,response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response) => {
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName] ){
      response.json(tea[teaName])
    } else {
        response(tea['unknown'])
    }

    response.json(tea)

})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on ${ PORT}`)
})