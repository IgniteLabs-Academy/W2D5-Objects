const fs = require('fs');
const path = require('path');

test('Object declared', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Object declared
  expect(code).toMatch(/let\s+user\s*=\s*{[^}]*}/);
});
