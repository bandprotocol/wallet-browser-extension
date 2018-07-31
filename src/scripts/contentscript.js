import ext from './utils/ext'

window.addEventListener(
  'message',
  function(event) {
    // We only accept messages from this window to itself [i.e. not from any iframes]
    if (event.source != window) return

    // Reponse to Browser's ping
    if (event.data.type && event.data.type == 'BAND_PROTOCOL_PING') {
      window.postMessage({ type: 'BAND_PROTOCOL_PONG' }, '*')
    }

    if (event.data.type && event.data.type == 'BAND_PROTOCOL') {
      // broadcasts it to rest of extension, or could just broadcast event.data.payload...
      alert('MESSAGE!!!!')
      ext.runtime.sendMessage(event.data)
    } // else ignore messages seemingly not sent to yourself
  },
  false
)
