let day = "Sunday";
let alarm = "";

const alarmClock = () => {
    const alarmTrigger = {
        weekendAlarm: "No Alarm Needed",
        weekdayAlarm: "Get up at 7 AM"
    }
    
    if (day === "Saturday" || day === "Sunday") {
        console.log(alarmTrigger.weekendAlarm);
    }
    
    else {
        console.log(alarmTrigger.weekdayAlarm);
    }
}

alarmClock();

