const fs = require('fs');
const path = require('path');

test('Object add property', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Object add property
  expect(code).toMatch(/user\.email\s*=\s*['"].+['"]/);
});
