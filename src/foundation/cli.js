function parseCommandLineArgs (parser, commandLineArgs) {
  return parser(commandLineArgs);
}

function getCommandLineArg (arg, args) {
  return args[arg];
}

const getEnvironment =
  getCommandLineArg.bind(null, 'environment');

const cli = {parseCommandLineArgs, getEnvironment}

export default cli;
