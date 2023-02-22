# dostr
Real-time collaborative document editing over nostr

# Development

## WebRTC Signaling Server

To use our own local WebRTC signaling server, use the one provided with y-webrtc (see https://github.com/yjs/y-webrtc#signaling):

```
# start signaling server
set PORT=4444
node ./node_modules/y-webrtc/bin/server.js
```

