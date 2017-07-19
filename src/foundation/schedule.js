import * as yaml from 'js-yaml'
import * as fs from 'fs'
import * as cron from 'cron'

function getScheduleFromFilesystem (environment) {
  const filePath = './resources/schedules/' + environment + '.yml',
        format = 'utf8'
  return yaml.safeLoad(fs.readFileSync(filePath, format))
}

const drivers = {filesystem: getScheduleFromFilesystem}

function getDriverFunction (driver) {
  return drivers[driver];
}

export function getSchedule (driver, environment) {
  const driverFunction = getDriverFunction(driver)
  return driverFunction(environment)
}

export function makeCronJob ({job, cronTime, runOnInit}) {
  return new cron.CronJob({onTick: job,
                           cronTime: cronTime,
                           runOnInit: runOnInit})
}
