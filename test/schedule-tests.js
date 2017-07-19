import * as _ from 'lodash'
import assert from 'assert';
import * as schedule from '../dist/foundation/schedule'

describe('Schedule Tests', () => {
  it('Should pull a schedule file from the filesystem based on the environment', () => {
    const environment = 'test',
          testSchedule = { environment: 'test',
                           schedules: [{job: 'test',
                           cronTime: '60 * * * * *',
                           runOnInit: true}]}

    assert.equal(true, _.isEqual(testSchedule, schedule.getSchedule('filesystem', environment)))
  })
})
