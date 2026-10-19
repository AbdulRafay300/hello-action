const core = require('@actions/core');
const github = require('@actions/github');

try {
  const name = core.getInput('who-to-greet');
  const greeting = `Hello, ${name}! From ${github.context.actor}`;
  console.log(greeting);
  core.setOutput('greeting', greeting);
} catch (error) {
  core.setFailed(error.message);
}