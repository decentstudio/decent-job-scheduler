import _ from 'lodash'
import assert from 'assert';
import schedule from '../dist/foundation/schedule'

describe('Schedule Tests', () => {
  it('Should pull a schedule file from the filesystem based on the environment', () => {
    const environment = 'test',
          testSchedule = { environment: 'test',
                           schedules: [{job: 'test',
                           cronTime: '60 * * * * *',
                           runOnInit: true}]}

    assert.equal(true, _.isEqual(testSchedule, schedule.getSchedule('filesystem', environment)))
  })

  it('Should build the standard schedule filepath', () => {
    const filePath = './resources/schedules/test.yml'
    assert.equal(filePath, schedule.getScheduleFilePath('test'))
  })

  it('Should return the schedule file format', () => {
    const fileFormat = 'utf8'
    assert.equal(fileFormat, schedule.getScheduleFileFormat())
  })
})
