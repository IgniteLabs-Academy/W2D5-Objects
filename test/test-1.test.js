const fs = require('fs');
const path = require('path');

test('Console log object', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Console log object
  expect(code).toMatch(/console\.log\(user\)/);
});

test('Loop through properties with for...in', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Looping through properties with for...in
  expect(code).toMatch(/for\s*\(let\s+key\s+in\s+user\)/);
});
