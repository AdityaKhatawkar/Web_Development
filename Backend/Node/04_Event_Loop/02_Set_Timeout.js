// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process

//even though we have a timeout of 0, the setTimeout function will still wait for the current event loop
//to finish before executing the callback function that is passed as an argument into the setTimeout function.

//saral bhasha mai, even though timeout 0 hai, uske immediate next line ke execution ke baad hee callback resolve hoga!!!