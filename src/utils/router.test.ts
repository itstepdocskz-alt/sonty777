import test from 'node:test';
import assert from 'node:assert/strict';
import { parseRoute } from './router';

test('parseRoute correctly identifies home route', () => {
  assert.deepEqual(parseRoute('/'), { type: 'home' });
  assert.deepEqual(parseRoute(''), { type: 'home' });
});

test('parseRoute correctly identifies project slug routes', () => {
  assert.deepEqual(parseRoute('/work/project-01'), {
    type: 'project',
    slug: 'project-01',
  });
  assert.deepEqual(parseRoute('/work/brand-identity-xyz/'), {
    type: 'project',
    slug: 'brand-identity-xyz',
  });
});

test('parseRoute flags unknown paths as 404', () => {
  assert.deepEqual(parseRoute('/unknown-path'), { type: '404' });
  assert.deepEqual(parseRoute('/work/extra/nested/path'), { type: '404' });
});
