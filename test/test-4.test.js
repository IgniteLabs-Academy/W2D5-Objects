const fs = require('fs');
const path = require('path');

test('Object property access', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Object property access
  expect(code).toMatch(/user\.name/);
});

test('Object destructuring', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Object destructuring for name and age
  expect(code).toMatch(/let\s*{\s*name\s*,\s*age\s*}\s*=\s*user/);
});
