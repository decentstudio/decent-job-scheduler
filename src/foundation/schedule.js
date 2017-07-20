import * as yaml from 'js-yaml'
import * as fs from 'fs'
import * as cron from 'cron'

function getScheduleFilePath (environment) {
  return `./resources/schedules/${environment}.yml`
}

function getScheduleFileFormat () {
  return 'utf8'
}

function getScheduleFromFilesystem (environment) {
  const path = getScheduleFilePath(environment),
        format = getScheduleFileFormat(),
        file = fs.readFileSync(path, format)
  return yaml.safeLoad(file)
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

const schedule = {makeCronJob,
                  getSchedule,
                  getScheduleFilePath,
                  getScheduleFileFormat}

export default schedule;
