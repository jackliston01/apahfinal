// x = doomer(-1) / optimist(+1), y = logic(-1) / emotion(+1)
// max x contribution = 1.0+0.9+0.7+0.1+0.85 = 3.55
// max y contribution = 0.1+0.2+0.8+0.95+0.15 = 2.2

let doomeroptimist = 0;
let logicemotion = 0;

for (let i = 1; i < 6; i++) {
  let vals = JSON.parse(JSON.parse(localStorage.getItem(i)));
  if (vals.val < 3) {
    if (vals.val == 1) {
      vals.val = (vals.val) * (-1);
    } else {
      vals.val = (vals.val) * (-1 / 4);
    }
  } else {
    vals.val = Math.trunc((vals.val) / 2) / 2;
  }
  doomeroptimist += ((vals.val) * (vals.mag.x));
  logicemotion += ((vals.val) * (vals.mag.y));
}

doomeroptimist = (doomeroptimist / 3.55);
logicemotion = (logicemotion / 2.2);

console.log(doomeroptimist + "---" + logicemotion);


const scchart = document.getElementById('scchart');
scchart.style.width = '100%';
scchart.style.maxWidth = '600px';
scchart.style.height = 'auto';
scchart.style.aspectRatio = '1/1';


const myChart = new Chart(scchart, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'You',
      data: [
        { x: doomeroptimist, y: logicemotion },
      ],
      backgroundColor: 'red',
      pointRadius: 8
    }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Doomer / Optimist',
        },
        min: -1,
        max: 1,
        grid: {
          color: (ctx) => ctx.tick.value === 0 ? 'black' : '#ccc',
          lineWidth: (ctx) => ctx.tick.value === 0 ? 2 : 1
        }
      },
      y: {
        title: {
          display: true,
          text: 'Logic / Emotion'
        },
        min: -1,
        max: 1,
        grid: {
          color: (ctx) => ctx.tick.value === 0 ? 'black' : '#ccc',
          lineWidth: (ctx) => ctx.tick.value === 0 ? 2 : 1
        }
      }
    }
  }
});


document.getElementById("score").innerHTML = (
  `Doomer/Optimist (x-axis): ${Math.round(doomeroptimist * 1000) / 1000} — negative = more doomer, positive = more optimist <br>` +
  `Logic/Emotion (y-axis): ${Math.round(logicemotion * 1000) / 1000} — negative = more logic-driven, positive = more emotion-driven`
);


window.addEventListener('resize', function () {
  myChart.resize();
});
