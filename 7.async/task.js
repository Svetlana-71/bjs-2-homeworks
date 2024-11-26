class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
    addClock(time, callback) {
      if (!time ||!callback) {
        throw new Error('Отсутствуют обязательные аргументы');
      }
      for(let alarm of this.alarmCollection) {
        if(alarm.time === this.time) {
          console.warn('Уже присутствует звонок на это же время'); 
          return;
        }      
      }
      this.alarmCollection.push({ callback, time, canCall: true });
    }
    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(clock => clock.time!== time);
    }
    getCurrentFormattedTime() {  
      return new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    start() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        return;
      }
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach(clock => {
          if (clock.time === this.getCurrentFormattedTime() && clock.canCall) {
            clock.canCall = false;
            clock.callback();
          }
        });
      }, 1000);
    }
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    resetAllCalls() {
      this.alarmCollection.forEach(clock => clock.canCall = true);
    }
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }
  
  
