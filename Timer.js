class Timer {
  constructor() {
    this.elapsedTime = 0;
    this.active = true;

    if (debug == true && this.active == true) {
      console.log("Start Timer");
    }
    var self = this;
    this.counter = window.setInterval(function () {
      document.getElementById("time").innerHTML = "Time: " + self.elapsedTime++;
    }, 1000);
  }
  clearTimer() {
    clearInterval(this.counter);
  }
}
