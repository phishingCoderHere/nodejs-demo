

const httpReq = new XMLHttpRequest()
function handleEvent(e) {
    console.log(e);

    log.textContent = log.textContent + `${e.type}: ${e.loaded} bytes transferred\n`;
}
httpReq.addEventListener('load', handleEvent);
httpReq.addEventListener('error', handleEvent);
httpReq.open('get', 'http://localhost:3000/')
httpReq.send()
