const brain = require('brain.js');

/* const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3],
  activation: "sigmoid", //sigmoid (0, 1), tanh (-1, 1), relu (0, n), leaky-relu (0.01, n)
  leakyReluAlpha: 0.01,
  inputSize: 2,
  inputRange: 2,
  outputSize: 1,
  learningRate: 0.01,
  decayRate: 0.999,
}; */

const config = {
  hiddenLayers: [7],
  activation: 'leaky-relu', //sigmoid (0, 1), tanh (hiperbólica) (-1, 1), relu (0, n), leaky-relu (0.01, n)
  decayRate: 0.1,
};

const net = new brain.NeuralNetwork(config);

net.train(
  [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
  ],
  /* {
    iterations: 20000,
    errorThresh: 0.005,
    log: false,
    logPeriod: 10,
    learningRate: 0.3,
    momentum: 0.1,
    callback: null,
    callbackPeriod: 10,
    timeout: Infinity,
  }, */
  {
    iterations: 10000,
    errorThresh: 0.004,
    log: true,
    logPeriod: 100,
    learningRate: 0.3,
    momentum: 0.1,
    callback: null,
    callbackPeriod: 10,
    timeout: Infinity,
  },
);

const output = net.run([0, 1]);

console.log(output);
