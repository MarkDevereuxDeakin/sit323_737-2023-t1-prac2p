//const { JSON } = require('express');
const express = require('express');
//const axios = require('axios');

const app = express();
const port = 8080;


/*app.get('/api/users/:id', async (req, res) => {
  try
  {
    const { id } = req.params;
    console.log(`Retrieving user ID: {id}`);

    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log(response.data);
    res.send(response.data);
  } 
  catch (error) {
    console.error(error);
    res.status(500).send('Error Received');
  }
});*/

//Serves the index.html file as a simple webpage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(port, () => {
    console.log(`Microservice listening at http://localhost:${port}`);    
});
