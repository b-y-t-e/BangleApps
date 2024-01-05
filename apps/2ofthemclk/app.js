const img = require("heatshrink").decompress(atob("2GwwkG/4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/ADXzmczn5D/ACMzmUiiMRiZF/KJkzkQACKgIADBYIAGKn78BKIcQgEAAgMBBAUSkICBBoIICkRZ8+cyI4JWFAA8BA4xZDLXEzKocQJQ4ALNIJvDLW0yVRoAPgIeCiUjVmMiSQZWZAAJ1DgJYv+ZVDKziwCZoRYBn6CBmRXpmJWDG4QAhE4auqiCufABauqQ4SukK+EBKtBXtVtJXqkBXBAFZXpVtavsLFhXoiEBK/4AViJX/K68RK1ZXpiCusK9MgiJYsK9RCXgJX/ACsRZChX/VoJXBDKZXomKVRgISDgMVqpX9HqIRFK5i7IK/SuCgIUCK5kVqLWGK9HyeohbSK5cBBgJXv+ZXUJIKiCK5VVqoJGK9MRK6RVBAAMRDBRX0SxL/EAAcRgIUBK5cFqtRK9//kBXLJYitCgMhAQIXKV4NQK+ExH5czUYq2BNhZvHK9zuJgEC/5PFVZZXFBA5Xp+RDKgZXGAAZuKABRXrgI1Il//kLxEAYYVJYQsQAIJXs+ZJEAAs/K4sBWoUBK58gK/MCBoKvFI4ZbCABgXFK+kfK4ZPFewRVSK+0vBoMxK46sNEZBXzgQNCK44ANgIUIK9P/K5ETK7SvxK5EBn4MCmRXVgAVHK+SuDV4xHBAB5Xx+ZXGVwhXHLCKvxkJXFVwhXDBwRWYK9cgK4kBl4MEmRXFew4ADBZRvBK+ECBgpXSgLPFBQpXqmI3EVwpXGAgJPIUQMAK5IbBK9YxDiQMGV45cHVpYSCgBXq+aSCgM/K5JOCAgZbBK4gALCQJXr/8hGIMjBY5XDUIJTDMAgAEWJDGCK9fzkUzBZBXDKYcQLQRXCUIRNDK4wWCK9YALK4hTDL4gICXgpXHiJX3+Q6BihVGMApXIgIIDgJX3+ZXMiBVCiBcEK4yv4/8gK4NFqJXHfghODLIQMBA4ZX4mMAilBqJYHU4RVEBQYGFK/MBilEqpYIK5IAFgRX5iEEK4NVokRLIpXBKpazBgZX5iMBopXCoqyFVw8VMopX6kJXFAQL/MitVqNUoK9Ch5X5iBXCqhXOKwIABK4JWBgEfK/UAqhXUogYBK/0UK4KyBqNEe4IAIKwZX/HgMUIYJXBqkkVxtUoJWCgEDK/EgK4hHBqUhKo8iK4tRK/qvCKwJXCqNBiL4DK4USkJWDogNDgECK2/zV4MBK4pQBJAYNBA4MhV4NFK///K4lFK4KtEAAaxCK4NVCQJX/K4b4CVosAJoJXDLANEoIOEgZX8VwZXIgJYDqhXGV/MhgEEV4VRK44ACK4VVK/4ABmKvCK4KvILApnBolABQkBK/yvCiBXLqtEBwxX8KoRX/K6cUK5oLCK4VAK/5IEAAZXNoJX/K5CwGgIKCitRV/5XKWAwLFqhXFgJX7UIatCWAoMEWANUXosCK/6sGKwxnEAAcDK/b6EIwgFEK4pmFK/5HGgKyJK/5XHe4q1FKxBX+JIMBUgJYIV4hX/K4qiCVxJXLgJX5U4hLBqJKIKwZmIK/EhK4sVqtVBAhZHK/5XHKwNVWIMRiERL4IGBBQNEK/4ABJYJXEqlEopaCqgDCAAVEK/4AB+ZXIJ4gABLQQLBK/5XLLAJWDAAK3BAgRX///yK4xMCLQRXICghX7mJXFgEVK5IHDK/5XIiMUJ4gADA4cRK/8RK40BK4JWGK4dRV//zK5ERqpXJoquIK+/yK48AiMUK46uLK+8xK4JAGgJX/K8QTHK/MhK6dBVxJX2+ZWBK5ERVxJX/K5cAK5FBCRBX4+RWBTZERihXHVxRX2mRXTCRJX4mJXBKxAABK45WKK+0hTZMBgJXGoJX/AAPzUYLzJK4KxFYRJX4+RXLKwQAFCRJX3+JXTKxhX1mLzLgMQKQJXDKxhX1kKcLK4JRNK/PzTh5X/K46iVK///+RVgK+vxK/4AWmBX/AC0gK/4AV+ZWiK+fyK/4AWmJX/AC0gK/4AWiJX/ACvzgJX/ACvyK0ZXymJX/AC0gK/4AV+cQK/4AV+RWkK+PxK/4AWmJX/AC0wK/4AWiBX/ACvzK0pXw+JX/AC0gK/4AWoBX/AC0QK/4AV+ZWmK/5X/AA/yK/5X/K/5X/AA0xK/4AWkBX/K/5X/K/5X/K/5X/K/4AOoBX/K/5XukBX/K/5X/K/5XRgMQK/5XWApRX/K5MRAAQHDWi5X7KYUBK/4AGmBXLLYxX/K5kVqpVDqMVLC5X1JgJXBAANRqJcCK5wOHA=="))
var battery = E.getBattery();

// Positions on screen
const timeX = 56, timeY = 37;
const dateX = 175, dateY = 180;
const battX = 172, battY = 19;
const stepsX = 140;
const stepsY = 153;

// Draw on every second if unlocked or charging, minute otherwise, start at with seconds on load
var drawTimeout;
var drawInterval = 1000;

// schedule a draw for the next interval
function queueDraw() {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    draw();
  }, drawInterval - (Date.now() % drawInterval));
}

// Update display and timeout on lock/unlock and charge state change
Bangle.on('lock',on=>{
  draw();
});

Bangle.on('charging',charging=>{
  draw();
});

function draw() {
  // work out how to display the current time
  var d = new Date();
  var h = d.getHours(), m = d.getMinutes();
  var time = (" "+h).substr(-2) + ":" + ("0"+m).substr(-2);
  var seconds = ("0"+d.getSeconds()).substr(-2);

  // g.clear();  // Unneeded if background image takes the whole screen

  // Draw background
  g.drawImage(img);
  g.setColor(0, 0, 0);

  // draw the current time
  g.setFontAlign(1,1); // align right bottom
  g.setFont("6x15",2);
  g.drawString(time, timeX, timeY, false);

  // Draw battery %
  g.setColor(0, 0, 0);
  g.setFont("6x15",1);
  var battStr = "";
  if(Bangle.isCharging()) {
    battStr = "+";
  }
  g.drawString(battStr + battery + "%", battX, battY, false);
  g.setColor(0, 0, 0);

  // Draw date
  g.setFontAlign(1,1); // align left bottom
  g.setFont("6x15",2);
  //var dateStr = require("locale").date(d)+"    ";

  var d = new Date();
  var day = d.getDate(); // Dzień jako liczba
  var month = d.getMonth(); // Miesiąc jako liczba (styczeń to 0)
  var year = d.getFullYear(); // Rok jako liczba

  // Tablica ze skrótami miesięcy po polsku
  var months = ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paz", "lis", "gru"];

  // Formatowanie dnia, dodajemy zero na początku jeśli dzień jest jednocyfrowy
  if (day < 10) day = '0' + day;

  // Tworzymy łańcuch znaków z datą w formacie dd/mm/yyyy
  var dateStr = day + ' ' + months[month] + ' ' + year;

  g.setColor(1, 0, 0);
  g.drawString(dateStr, dateX, dateY, false);
  g.setColor(0, 0, 0);

  // draw the seconds only if unlocked, set next timeout
  if(!Bangle.isLocked() || Bangle.isCharging()) {
    g.setColor(1, 0, 0);
    g.setFontAlign(-1,1);
    drawInterval = 1000;
    g.setFont("6x15",2);
    g.drawString(':'+seconds, timeX+2, timeY, false);
    g.setColor(0, 0, 0);
  }
  else
    drawInterval = 60000;


  // Pobierz liczbę kroków
  var steps = Bangle.getHealthStatus().steps;

  // Ustawienia czcionki i koloru dla wyświetlania kroków
  g.setFont("6x15", 2);
  g.setColor(0.5, 0.5, 0.5); // ustawienie na zielony


  // Rysowanie liczby kroków
  g.setColor(0, 0, 1); // ustawienie na zielony
  g.drawString("" + steps, stepsX, stepsY, false);


  // Schedule next draw
  queueDraw();
  // console.log("Draw " + time + ":" + seconds);
}

function refreshBattery() {
  battery = E.getBattery();
}

// Only update displayed battery level every minute as it fluctuates a lot
var batteryInterval = setInterval(refreshBattery, 60000);

Bangle.setUI("clock");
Bangle.setLocked(false);
// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
