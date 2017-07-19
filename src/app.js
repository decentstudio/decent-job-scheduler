import minimist from 'minimist'
import * as cli from './foundation/cli'
import * as schedule from './foundation/schedule'
import * as registry from './jobs/registry'
import log from 'npmlog'

function swapJobFunction ({job, cronTime, runOnInit}) {
  return {job: registry.getJob(job),
          cronTime: cronTime,
          runOnInit: runOnInit};
}

function startCronJob (cronJob) {
  cronJob.start();
}

function init () {
  log.info("Starting Job Scheduler...")
  const commandLineArguments = cli.parseCommandLineArgs(minimist, process.argv),
        environment = cli.getEnvironment(commandLineArguments),
        scheduleDriver = 'filesystem',
        schedules = schedule.getSchedule(scheduleDriver, environment).schedules,
        cronJobs = schedules.map(swapJobFunction)
                            .map(schedule.makeCronJob)

  cronJobs.map(startCronJob)

  log.info("Jobs started...")
}

init();
