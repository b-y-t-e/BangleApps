// Return an array of all alarms
exports.getAlarms = function() {
  return require("Storage").readJSON("sched.json",1)||[];
};
// Write a list of alarms back to storage
exports.setAlarms = function(alarms) {
  return require("Storage").writeJSON("sched.json",alarms);
};
// Return an alarm object based on ID
exports.getAlarm = function(id) {
  return exports.getAlarms().find(a=>a.id==id);
};
// Given a list of alarms from getAlarms, return a list of active alarms for the given time (or current time if time not specified)
exports.getActiveAlarms = function(alarms, time) {
  if (!time) time = new Date();
  var currentTime = (time.getHours()*3600000)+(time.getMinutes()*60000)+(time.getSeconds()*1000)
                    +10000;// get current time - 10s in future to ensure we alarm if we've started the app a tad early
  return alarms.filter(a=>a.on&&(a.t<currentTime)&&(a.last!=time.getDate()) && (!a.date || a.date==time.toISOString().substr(0,10))).sort((a,b)=>a.t-b.t);
}
// Set an alarm object based on ID. Leave 'alarm' undefined to remove it
exports.setAlarm = function(id, alarm) {
  var alarms = exports.getAlarms().filter(a=>a.id!=id);
  if (alarm !== undefined) {
    alarm.id = id;
    if (alarm.dow===undefined) alarm.dow = 0b1111111;
    if (alarm.on!==false) alarm.on=true;
    if (alarm.timer) { // if it's a timer, set the start time as a time from *now*
      var time = new Date();
      var currentTime = (time.getHours()*3600000)+(time.getMinutes()*60000)+(time.getSeconds()*1000);
      alarm.t = currentTime + alarm.timer;
    }
    alarms.push(alarm);
  }
  exports.setAlarms(alarms);
};
/// Get time until the given alarm (object). Return undefined if alarm not enabled, or if 86400000 or more, alarm could be *more* than a day in the future
exports.getTimeToAlarm = function(alarm, time) {
  if (!alarm) return undefined;
  if (!time) time = new Date();
  var currentTime = (time.getHours()*3600000)+(time.getMinutes()*60000)+(time.getSeconds()*1000);
  var active = alarm.on && (alarm.dow>>((time.getDay()+(alarm.t<currentTime))%7))&1 && (!alarm.date || alarm.date==time.toISOString().substr(0,10));
  if (!active) return undefined;
  var t = alarm.t-currentTime;
  if (alarm.last == time.getDate() || t < -60000) t += 86400000;
  return t;
};
/// Force a reload of the current alarms and widget
exports.reload = function() {
  eval(require("Storage").read("sched.boot.js"));
  if (WIDGETS["alarm"]) {
    WIDGETS["alarm"].reload();
    Bangle.drawWidgets();
  }
};
// Factory that creates a new alarm with default values
exports.newDefaultAlarm = function () {
  const settings = exports.getSettings();

  let alarm = {
    t: 12 * 3600000, // Default to 12:00
    on: true,
    rp: settings.defaultRepeat,
    as: settings.defaultAutoSnooze,
    dow: 0b1111111,
    last: 0,
    vibrate: settings.defaultAlarmPattern,
  };

  delete settings;

  return alarm;
}
// Factory that creates a new timer with default values
exports.newDefaultTimer = function () {
  const settings = exports.getSettings();

  let timer = {
    timer: 5 * 60 * 1000, // 5 minutes
    on: true,
    rp: false,
    as: false,
    dow: 0b1111111,
    last: 0,
    vibrate: settings.defaultTimerPattern
  }

  delete settings;

  return timer;
};
// Return the scheduler settings
exports.getSettings = function () {
  return Object.assign(
    {
      unlockAtBuzz: false,
      defaultSnoozeMillis: 600000, // 10 minutes
      defaultAutoSnooze: false,
      defaultRepeat: false,
      buzzCount: 10,
      buzzIntervalMillis: 3000, // 3 seconds
      defaultAlarmPattern: "..",
      defaultTimerPattern: ".."
    },
    require("Storage").readJSON("sched.settings.json", true) || {}
  );
}
// Write the updated settings back to storage
exports.setSettings = function(settings) {
  require("Storage").writeJSON("sched.settings.json", settings);
};

// time in ms -> { hrs, mins }
exports.decodeTime = function(t) {
  t = Math.ceil(t / 60000); // sanitise to full minutes
  let hrs = 0 | (t / 60);
  return { hrs: hrs, mins: t - hrs * 60 };
}

// time in { hrs, mins } -> ms
exports.encodeTime = function(o) {
  return o.hrs * 3600000 + o.mins * 60000;
}

exports.formatTime = function(t) {
  let o = exports.decodeTime(t);
  return o.hrs + ":" + ("0" + o.mins).substr(-2);
}