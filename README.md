# decent-job-scheduler
The Decent Studio Job Scheduler

Functional enough to:
- Implement a job
- Register a job
- Define a schedule (edited)

Need to make the readme better, but the gist is:

A job is a function and you implement one by creating a module for it in `src/jobs`

After you create your job function, you add it to the registry map by importing the job function into that file `src/jobs/registry.js`

Now you can add a schedule in one of the environment schedule files in `resources/schedules/<environment.yml>`

Usage:

`node dist/app.js --environment <environment>`

Where currently environment would be: test, prod, dev

There is one test job called `test` and it prints hello world and then stops itself
