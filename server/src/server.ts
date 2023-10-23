import express from 'express'
import payload from 'payload'
import * as cors from 'cors'
import qs from 'qs'

require('dotenv').config()
const app = express()

app.use(cors.default())
app.use(express.json())

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

app.post('/webhook', async (req, res) => {
  console.log(req.body)
  let event = req.body.type
  let data = req.body.data
  let url = 'http://localhost:3000/api/subscribers'

  if (event == 'user.created') {
    let create = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": data['email_addresses'][0]['email_address'],
        "nome": `${data['first_name']} ${data['last_name']}`,
        "userid": data.id
      })
    })

    let response = await create.json()
    console.log(response)
  } else if (event == 'user.deleted') {
    
    const stringifiedQuery = qs.stringify({
      where: {
        userid: {
          is: data.id
        },
      },
    },{ addQueryPrefix: true })

    let del = await fetch(`${url}/${stringifiedQuery}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    let response = await del.json()
    console.log(response)
  }

  res.json({
    success: true,
    message: 'webhook arrivato'
  })
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000)
}

start()
