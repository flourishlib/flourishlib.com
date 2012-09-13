Date.prototype.diff = function(secondTimestamp, upperCaseFirst) {
  if (typeof secondTimestamp == 'boolean') {
    upperCaseFirst = secondTimestamp;
    secondTimestamp = undefined;
  }

  if (typeof secondTimestamp == 'undefined') {
    secondTimestamp = new Date();
  }

  if (typeof secondTimestamp == 'string') {
    secondTimestamp = Date.interpret(secondTimestamp);
  }

  var first = this.getTime() / 1000;
  var second = secondTimestamp.getTime() / 1000;

  var diff = first - second;

  if (Math.abs(first - second) < 60) {
    if (upperCaseFirst) {
      return 'Just now';
    }
    return 'just now';
  }

  breakPoints = [
    [3600,       60,       'minute', 'minutes'],
    [86400,      3600,     'hour',   'hours'],
    [604800,     86400,    'day',    'days'],
    [2592000,    604800,   'week',   'weeks'],
    [31536000,   2592000,  'month',  'months'],
    [2147483647, 31536000, 'year',   'years']
  ];

  var unitInfo;
  for (var i=0; i < breakPoints.length; i++) {
    unitInfo = breakPoints[i];
    if (Math.abs(diff) >= unitInfo[0]) {
      continue;
    }

    var unitDiff = Math.round(parseFloat(Math.abs(diff)) / parseFloat(unitInfo[1]));
    var units = unitDiff == 1 ? unitInfo[2] : unitInfo[3];
    break;
  }

  var suffix = first > second ? ' from now' : ' ago';
  return parseInt(unitDiff) + ' ' + units + suffix;
}