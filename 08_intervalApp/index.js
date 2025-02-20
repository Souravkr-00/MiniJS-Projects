
    let timerId; // Variable to store the interval ID
    let seconds = 0; // Timer counter

    // Start button functionality
    // document.getElementById('start').onclick = function () {
    //   if (!timerId) { // Prevent multiple timers from starting
    //     timerId = setInterval(() => {
    //       seconds++;
    //       document.getElementById('timer').textContent = seconds;
    //     }, 1000);
    //   }
    // };

    // Stop button functionality
    document.getElementById('stop').onclick = function () {
      clearInterval(timerId); // Stop the timer
      timerId = null; // Reset the interval ID
    };

    document.querySelector("#start").addEventListener("click",()=>{
      if (!timerId) { // Prevent multiple timers from starting
        timerId = setInterval(() => {
          seconds++;
          document.getElementById('timer').textContent = seconds;
        }, 1000);
      }
    })