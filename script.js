let min_time_array = [];
let medic_array = ["Abimol", "Comtrex", "Ceporex"];
let div_time_data = document.querySelector(".nextTime");
let timeData = [
  "11 PM",
  "7 AM",
  "3 PM",
  "9 PM",
  "5 AM",
  "1 PM",
  "1 AM",
  "9 AM",
  "5 PM",
];

let timeData_toUse = [23, 7, 15, 21, 5, 13, 1, 9, 17];

for (let i = 0; i < 9; i++) {
  let now = new Date();
  let targetTime = new Date(now);
  targetTime.setHours(timeData_toUse[i], 0, 0, 0);

  let timeDifference = targetTime - now;
  if (timeDifference < 0) {
    targetTime.setDate(targetTime.getDate() + 1);
    timeDifference = targetTime - now;
  }
  min_time_array.push(timeDifference);
}

let min_time = Math.min(...min_time_array);

let medic_index = Math.floor(min_time_array.indexOf(min_time) / 3) + 1;

div_time_data.innerHTML = `The next medic is : ${
  medic_array[medic_index]
} and It's after About ${(min_time / 3600000).toFixed(0)} Hour and ${(
  ((min_time / 3600000) % 1) *
  60
).toFixed(2)} min and It's Time is ${
  timeData[min_time_array.indexOf(min_time)]
}`;
