function clockAngle(hours, minutes) {
  const hoursInClock = 12;
  const minutesInHour = 60;

  const degreesPerHour = 360 / hoursInClock; // Degrees the hour hand moves in one hour
  const degreesPerMinute = 360 / minutesInHour; // Degrees the minute hand moves in one minute

  const hourAngle =
    (degreesPerHour / minutesInHour) *
    ((hours % hoursInClock) * minutesInHour + minutes);
  const minuteAngle = degreesPerMinute * minutes;

  let angle = Math.abs(hourAngle - minuteAngle);
  angle = Math.min(angle, 360 - angle);

  return angle;
}

// Calculate the angle using the function
const hours = 11;
const minutes = 6;
const angle = clockAngle(hours, minutes);
console.log(`The angle between the hour and minute hands is: ${angle} degrees`);
