/* Measuring a robot
It’s hard to objectively compare robots by just letting them solve a few scenarios.
Maybe one robot just happened to get easier tasks or the kind of tasks
that it is good at, whereas the other didn’t.

Write a function compareRobots that takes two robots (and their starting
126memory). It should generate 100 tasks and let each of the robots solve each
of these tasks. When done, it should output the average number of steps each
robot took per task.

For the sake of fairness, make sure you give each task to both robots, rather
than generating different tasks per robot. */


function compareRobots(robotOne, robotTwo) {
  robotOneResults = [];
  robotTwoResults = [];
  for (let i=0; i<100; i++) {
    let villageState = VillageState.random();
    robotOneResults.push(runRobot(villageState, robotOne, []));
    robotTwoResults.push(runRobot(villageState, robotTwo, []));
  }
  console.log(`Robot 1: ${getAverage(robotOneResults)}`);
  console.log(`Robot 2: ${getAverage(robotTwoResults)}`);
}


function getAverage(inputArray) {
  return inputArray.reduce((acc, c) => (acc + c)) / inputArray.length;
}


compareRobots(goalOrientedRobot, randomRobot); // See codepen or the book for the definition of these robots
// > Robot 1: 16.69
// > Robot 2: 92.04