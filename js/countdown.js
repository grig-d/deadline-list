export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
  }

  startCountdown() {
    const timerIdRef = document.querySelector(`${this.selector}`);
    if (timerIdRef === null) {
      console.log(`there is no timer markup for ${this.selector}`);
      return;
    }

    const refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };

    this.intervalId = setInterval(() => {
      const date = Date.now();
      const time = this.targetDate - date;
      if (time < 0) {
        console.log(`time is over for ${this.selector}`);
        this.stopCountdown();
        return;
      }

      const timeValue = {
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: this.pad(
          Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        ),
        mins: this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))),
        secs: this.pad(Math.floor((time % (1000 * 60)) / 1000)),
      };

      updateTimerFace(refs, timeValue);
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.intervalId);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

function updateTimerFace(refs, timeValue) {
  refs.days.textContent = `${timeValue.days}`;
  refs.hours.textContent = `${timeValue.hours}`;
  refs.mins.textContent = `${timeValue.mins}`;
  refs.secs.textContent = `${timeValue.secs}`;
}
