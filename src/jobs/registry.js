import test from './test'

const registry = {test: test}

export function getJob (job) {
  return registry[job];
}
