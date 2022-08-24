var sum = 0;

// for (let i = 2; i < process.argv.length; i++) {
//   sum += Number(process.argv[i]);
// }

process.argv.forEach((value, index) => {
  index > 1 && (sum += parseInt(value));
});

console.log(sum);
