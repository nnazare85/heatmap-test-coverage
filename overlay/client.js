const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = (event) => {
  const coverage = JSON.parse(event.data);
  document.querySelectorAll('.heatmap').forEach(el => {
    const id = el.id;
    if (coverage.testedIds.includes(id)) {
      el.style.outlineColor = 'green';
    } else {
      el.style.outlineColor = 'red';
    }
  });
};
