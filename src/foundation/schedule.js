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

function getSchedule (driver, environment) {
  const driverFunction = getDriverFunction(driver)
  return driverFunction(environment)
}

function makeCronJob ({job, cronTime, runOnInit}) {
  return new cron.CronJob({onTick: job,
                           cronTime,
                           runOnInit})
}

const schedule = {makeCronJob, getSchedule}

export default schedule;
