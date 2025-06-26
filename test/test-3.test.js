const fs = require('fs');
const path = require('path');

test('Object declared', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Object declared
  expect(code).toMatch(/let\s+user\s*=\s*{[^}]*}/);
});

test('Nested object property (address)', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Nested object property 'address' with 'city' and 'country'
  expect(code).toMatch(/user\.address\s*=\s*{\s*city:\s*['"].+['"],\s*country:\s*['"].+['"]\s*}/);
});
