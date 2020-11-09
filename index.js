const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
    timer: document.getElementById("timer-1")
    };

class CountdownTimer {

  constructor({ targetDate, selector }) {
    
    this.targetDate = targetDate;
    this.selector = selector;
  }

  intervalId = setInterval(() => {
  
  const currentTime = Date.now();
  const time = this.targetDate - currentTime;
      
    this.getTimeComponents(time)
    this.endOfTimer(time)
    }, 1000);
  
  
  getTimeComponents(time) {
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
 

 refs.days.textContent = `${days}`;
 refs.hours.textContent = `${hours}`;
 refs.mins.textContent = `${mins}`;
 refs.secs.textContent = `${secs}`;
    
  function pad(value) {
    return String(value).padStart(2, '0');
    };
  }
  
endOfTimer(time) {
    if (time === 0) {
      clearInterval(this.intervalId)
    }
  }
  
};


new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 25, 2020 00:00:00'),
});

