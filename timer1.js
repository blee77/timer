let array = process.argv.slice(2);
let timer = 0;
const alarm = ((num) => {
  timer = num * 1000;
  
  setTimeout(() =>{
    console.log("007");
    // process.stdout.write('\x07');
  },timer);
});
for (let time of array) {
  alarm(time);
}
