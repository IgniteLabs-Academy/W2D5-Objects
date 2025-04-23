const fs = require('fs');
const path = require('path');

test('Object property access', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Object property access
  expect(code).toMatch(/user\.name/);
});
