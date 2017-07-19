export function parseCommandLineArgs (parser, commandLineArgs) {
  return parser(commandLineArgs);
}

function getCommandLineArg (arg, args) {
  return args[arg];
}

export const getEnvironment =
  getCommandLineArg.bind(null, 'environment');
