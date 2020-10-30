function drawChart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      datasets: [
        {
          label: "Line Dataset",
          data: [10, 11, 9, 14, 6, 19, 2, 25],
        }
      ],
    },
    options: {
      title: {
        display: true,
        text: "Elements Selection",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              stepSize: 5,
              reverse: false
            },
          },
        ],
      },
    },
  });
}

window.onload = drawChart;
