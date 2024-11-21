setInterval(() => {
    console.log('hello world')
  }, 2000)
  console.log(`I will run first`)
  // process stays alive unless
  // Kill Process CONTROL + C
  // unexpected error

  //int set interval, event loop will invoke the callback every 2 seconds