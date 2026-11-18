const test = require('node:test');
const assert = require('node:assert');
const server = require('./app');

test('health endpoint returns ok', async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  const res = await fetch(`http://localhost:${port}/health`);
  const body = await res.json();
  assert.strictEqual(body.status, 'ok');
  server.close();
});
