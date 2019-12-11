/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { parse } from '../../utils/parser';

test('throws on null', () => {
  expect(() => parse(null)).toThrow(
    new Error('You cannot pass a null object.')
  );
});

test('throws on unparsable', () => {
  expect(() => parse({})).toThrow(
    new Error('The error you provided does not contain a stack trace.')
  );
});
