
## 微信小程序 socket.io 客户端

这是一个基于 socket.io 官方版本修改的，可以在微信小程序上使用的 socket.io 客户端，方便利用 socket.io 的更多特性。

使用 [engine.io-client-wxmp](https://github.com/yuchimin/socket.io-client-wxmp) 作为底层传输协议来支持微信小程序的 [WebSocket API](https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html).

- 大小仅为 12 KB (gziped)，完整保留 [socket.io-client](https://github.com/socketio/socket.io-client) 的 WebSocket 版本的功能
- 支持二进制格式传输（Binary/ArrayBuffer）、保持长连接（小程序默认约 60s 自动关闭连接）
- 仅修改了引用的 `engine.io-client` 的地址，业务代码无任何修改，所以可以跟官方版本保持同步更新

## 使用方法

下载 `dist/socket.io.min.js` 到小程序目录:

```js
const io = require('../socket.io.min.js')

const socket = io('ws://192.168.1.100:7001', {
  // path: "",
  transports: ['websocket'], // 此项必须设置
  auth: {

  },
  query: {

  }
})

socket.on('connect', () => {
  console.log('socket.io connected!')
  socket.emit('hello/world', 'hello world!')
})
```

初始化时必须设置 transports 为 `['websocket']` ，为了保持跟原生 API 一致，[小程序 API](https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxconnectsocketobject) 里的 `method` 暂不支持，其他选项参考上面的示例代码.

更多使用方法参考 socket.io 官方文档：https://socket.io/docs/client-api/

## API

See [API](/docs/API.md)

## License

[MIT](/LICENSE)
