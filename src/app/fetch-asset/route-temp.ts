// This has to be done directly from the browser
/*

fetch('https://example.com/largefile')
  .then(response => {
    const total = +response.headers.get('Content-Length');
    let loaded = 0;

    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        function push() {
          reader.read().then(({done, value}) => {
            if (done) {
              controller.close();
              return;
            }
            loaded += value.length;
            console.log(`Progress: ${Math.round((loaded / total) * 100)}%`);
            controller.enqueue(value);
            push();
          })
        }
        push();
      }
    });
  })
  .then(stream => {
    // process the stream
  });

*/
