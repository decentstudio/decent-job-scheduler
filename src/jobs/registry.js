import test from './test'

const jobRegistry = {test}

function getJob (job) {
  return jobRegistry[job];
}

const registry = {getJob}

export default registry
