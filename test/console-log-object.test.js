const fs = require('fs');
const path = require('path');

test('Console log object', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Console log object
  expect(code).toMatch(/console\.log\(user\)/);
});
