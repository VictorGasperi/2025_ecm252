require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')

const app = express()
app.use(express.json())
app.use(cors())

const pexelsClient = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: process.env.PEXELS_KEY
    }
})

app.get('/search', async (req, res) => {
    // o primeiro query é do objeto req
    // o segundo query é o nome do parametro que vem do front, que coincidentemente é o mesmo
    
    try {

        const result = await pexelsClient.get('/search', {
            params: {
                query: req.query.query,
                per_page: req.query.per_page
            }
        })

        res.json(result.data)

    } catch (err) {
        res.status(500).end()
    }

})

const port = 3000
app.listen(port, () => {
    console.log(`Backend Rodando. Porta: ${port}`)
})