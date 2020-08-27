let frameDelay = 200;
const animFrames = ['|', '/', '-', '\\'];
const timeout = frameDelay * animFrames.length;

const animLoopID = setInterval(() => {
  for (let i = 0; i < animFrames.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${animFrames[i]}   `);
    }, frameDelay * i);
  }
}, timeout);

setTimeout(() => {
  clearInterval(animLoopID);
  process.stdout.write('\n');
}, 4000);

// for (i = 0; i < 100; i++) {
//   setTimeout(() => {
//     process.stdout.write('\r |   ');
//   }, x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r /   ');
//   }, 2 * x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r -   ');
//   }, 3 * x + (i * 1000));
//   setTimeout(() => {
//     process.stdout.write('\r \\   ');
//   }, 4 * x + (i * 1000));
// };