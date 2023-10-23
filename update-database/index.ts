Bun.serve({
  async fetch(request, server) {
    const { pathname } = new URL(request.url)
    if (pathname == "/webhook" && request.method == "POST") {
      const body = await request.json()
      console.log(body.data)

      if (body.type == 'user.created') {
        const req = await fetch('http://locahost:3000/api/users', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "shishdia",
            content: "Here is some content"
          })
        })      
      } else if (body.type == 'user.deleted') {
        console.log('Utente: ' + body.data.id + ' eliminato')
      } else if (body.type == 'user.updated') {
        console.log('Utente: ' + body.data.id + ' aggiornato')
      }

      return Response.json({
        success: true,
        message: 'messaggio arrivato'
      })
    } 
    
    return Response.error()
  },
  port: 1234
})