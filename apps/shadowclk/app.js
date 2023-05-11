// Clock with large colored digits using the "Londrina" font and a slightly larger "Londrina Shadow" font on top

Graphics.prototype.setFontLondrinaSolid = function() {
  // Actual height 59 (64 - 6)
  return this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('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'))),
    46,
    atob("DyEqHigoJikpJygqEQ=="),
    81 | 65536
  );
};

Graphics.prototype.setFontLondrinaShadow = function() {
  // Actual height 63 (67 - 5)
  return this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('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'))),
    46,
    atob("DyEqHigoJikpJygqEQ=="),
    81 | 65536
  );
};

Graphics.prototype.setFontRighteous = function() {
  // Actual height 16 (15 - 0)
  return this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('ABN//ABBv0QA4N4AIVwAogACoEC+EH+EP4EOAovACIcPsEfsF7vABBjfghPAjEAv0As0Yv14n/gg+Aj34vP4sPYgH4gFgEgMP8Ef+F7nABBjcwjEwIwZNFEYM//H//3wn3AgwLBwEC8EO/3+v/8E4IfDmMAn+A/8A/0AAYIHBncAGQMDAIUHgEf4ABBBIYAEjwBChgGBB4YBJAAU4AIS1BhAFBgP4h/wHoKPBXYIlDj/gn/wuF4uE4sEYAYLXBBYK9BSwLhDAIKODuP4uYBB3ABDv84n84jgSCEoNzAIIRFFoUc8DFBv/gAIN+A4IBCWoIBBj7XEFoIBDu4BCH4XwsPggPAdIItBf4N+nFOnEOnB/Bg4tBwAmBQINwOoP4u5rB4CNEsEdS4ILBLIMYAIIFBBIINBgFAhznCn/AuPIuHYRIN7N4TnBZQcHnABBgTLBXoOeAIMBdYUHgEPwAZBnvgnHgiFAD4cNwABLCIcwsAbBdILbBg+AeIJoCPIfYTIR7BgABBv8AnwTCgIZB8EHuEP7ABE4EOoEH4CzBCoLNBQ4N48FwAIjvCboYACBIIBDuapBAIQJDnypBQYKBBcIU4vFwnABHmEwFI4PFXoSBCHpoVBsEYCJGAAISZDJY14JZD7BmJhCE48DVIIBEBYYVJgE4AIYJC+F/MYQVHJIXAJISBCoEIFJoBEgDRBToRxCU4wJECYI/Jn8AWIMD8EBG4rjQUILTNuHgAId/EYPAj+AFZ0+vF+n/2FaBhD7ArBjiHBXIM4ue4AI34uLtBoCLDS5YBBHIRbBDIN4dJXgCYNggF+C4JvB/CjBgZLBCIOADwNAFIYJBc4jxJF4YXBoEIRYN8E4SHBToa/BBoIRBvgtBAIOAgfAIIJDCwAJBBoIRBsAnCToKJBGoW4vzEBnFgIIMA//+AIfgh3AgxhBRoJ1BcoMH+AxBLYUACIIVBAIIdDBYMYCAQdBAYMQQoUAgYBMAAUwDY0BHYUP/EOnEOjADBA4ILDWYR5BWoPwCYQBECYMDboQnIAIUPnEGmA3NcogjH/ADBh+4EYcMTIK3C//49kA5gbHnYBCn8P/8H/0P/iFDaoQTBgABDPYRBB/EgCIgFBkEPv/+v/8A4IhFgPggY9Ch14hiwBhARFHYZlCHYgHFNYJBDgYZCB45THXJjhCZoaBC/7fHCYYjBEp3/EIJjLJoIBBgcYh/YAIMMAIf4AIVwCIN/8D3DSoMMjABBh+Ah4/CgChBAIQ1DHYKRCCYUBQISFBh/Ah66CAoQjGEIgHFCIPAhEIOYV4TIaBDJZE7gE/AIMP/0P/hLChBlCGYQBCNYUAjEDRoOAv/8//+/n+8EOAIIfBBIIBBv/+4EGBoYJC/kHwAfBCoMHAIgrBAYMGgA='))),
    32,
    atob("BAQHCQcLCAQGBgkIBAgECAoFCQkKCQoICgoEBAgJCAoKCwsKCgkJCwsEBwoJDQsMCgwKCgkLCg0KCgkGCAYFCgQKCggKCAYKCQQECQQMCQkKCgcIBwkJDAgJCAcEBwcA"),
    16 | 65536
  );
};

// Load and set default appSettings
let teletextColors = ["#000", "#f00", "#0f0", "#ff0", "#00f", "#f0f", "#0ff", "#fff"];
let defaultAppSettings = Object.assign({
  color: teletextColors[6],
  theme: 'light',
  enableSuffix: true,
  enableLeadingZero: false,
}, require('Storage').readJSON("shadowclk.json", true) || {});

// Draw the time and date
(function() {
  let drawTimeout;

  function draw() {
    var x = g.getWidth() / 2;
    var y = g.getHeight() / 2;
    g.reset().clearRect(Bangle.appRect);
    var date = new Date();
    var appSettings = require("Storage").readJSON("shadowclk.json", 1) || defaultAppSettings;
    var settings = require("Storage").readJSON("setting.json", 1) || {};
    var is12HourFormat = settings["12hour"];
    var hour = date.getHours();
    var minutes = String(date.getMinutes()).padStart(2, '0');
    // Handle 12-hour format
    if (is12HourFormat) {
      hour = hour % 12 || 12; // Convert 0 to 12 for 12-hour format
    } else {
      // If the leading zero option is enabled and hour is less than 10, add leading zero
      if (appSettings.enableLeadingZero && hour < 10) {
        hour = '0' + hour;
      }
    }
    var timeStr = hour + ':' + minutes;
    // Handle midnight in 12-hour format specifically
    if (is12HourFormat && hour === 0) {
      timeStr = '12' + timeStr.substring(2);
    }
    // Print time in selected color and then the outline
    var color = appSettings.color;
    g.setFontAlign(0, 0).setFont("LondrinaSolid").setColor(color).drawString(timeStr, x - 1, y);
    g.reset().setFontAlign(0, 0).setFont("LondrinaShadow").drawString(timeStr, x - 1, y);
    // Get full date and format it
    var locale = require("locale");
    var dayOfMonth = date.getDate();
    var month = locale.month(date, 1).slice(0, 1).toUpperCase() + locale.month(date, 1).slice(1).toLowerCase();
    var year = date.getFullYear();
    var dayOfMonthStr = dayOfMonth.toString();
    if (appSettings.enableSuffix) {
      var suffix = "";
      if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
        suffix = "st";
      } else if (dayOfMonth === 2 || dayOfMonth === 22) {
        suffix = "nd";
      } else if (dayOfMonth === 3 || dayOfMonth === 23) {
        suffix = "rd";
      } else {
        suffix = "th";
      }
      dayOfMonthStr += suffix;
    }
    // Combine and print date string
    var dayOfWeek = locale.dow(date, 0).slice(0, 1).toUpperCase() + locale.dow(date, 0).slice(1).toLowerCase();
    var dateStr = month + " " + dayOfMonthStr + ", " + year + "\n" + dayOfWeek;
    g.setFontAlign(0, 0).setFont("Righteous").drawString(dateStr, x, y + 56);
    // Time interval set to redraw every 60 seconds
    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = setTimeout(() => {
      drawTimeout = undefined;
      draw();
    }, 60000 - (Date.now() % 60000));
  }
  Bangle.setUI({
    mode: "clock",
    remove: function() {
      if (drawTimeout) clearTimeout(drawTimeout);
      drawTimeout = undefined;
      delete Graphics.prototype.setFontLondrinaSolid;
      delete Graphics.prototype.setFontLondrinaShadow;
      delete Graphics.prototype.setFontRighteous;
    }
  });
  Bangle.loadWidgets();
  draw();
  setTimeout(Bangle.drawWidgets, 0);
})();
