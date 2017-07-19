import assert from 'assert';
import minimist from 'minimist';
import * as cli from '../dist/foundation/cli';

describe('Command Line Tests', () => {
  it('Should get the value of the --environment argument.', () => {
    const value = 'dev',
          args = {environment: value}
    assert.equal(value, cli.getEnvironment(args))
  })
})
