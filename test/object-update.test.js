const fs = require('fs');
const path = require('path');

test('Object update', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Object update
  expect(code).toMatch(/user\.age\s*=\s*\d+/);
});
