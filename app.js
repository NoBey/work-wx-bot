var http = require('http')
var createHandler = require('gitlab-webhook-handler')
var handler = createHandler({ path: '/webhook' })

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(7777)

console.log("Gitlab Hook Server running at http://0.0.0.0:7777/webhook");

handler.on('error', function (err) {
  	console.error('Error:', err.message)
})

handler.on('push', function (event) {
  	console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
})

handler.on('issues', function (event) {
  	console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
})



curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=43350814-b440-4ca5-b609-9d9f4e7c698d' \
   -H 'Content-Type: application/json' \
   -d '{
    "msgtype": "markdown",
    "markdown": {
        "content": "
        [这是一个链接](http://work.weixin.qq.com/api/doc)
        "
    }
}'
