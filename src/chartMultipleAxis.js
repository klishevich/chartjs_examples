function drawChart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "A",
          xAxisID: "xAxisID1",
          yAxisID: "A",
          data: [100, 96, 84, 76, 69],
        },
        {
          label: "B",
          xAxisID: "xAxisID1",
          yAxisID: "B",
          data: [1, 0.9, 0.7, 0.5, 0],
        },
        {
          label: "C",
          xAxisID: "xAxisID1",
          yAxisID: "C",
          data: [30, 20, 10, 5, 3, 2, 1],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Multiple Axes",
      },
      scales: {
        xAxes: [
          {
            id: "xAxisID1",
          },
          {
            id: "xAxisID2",
          },
        ],
        yAxes: [
          {
            id: "A",
            type: "linear",
            position: "left",
          },
          {
            id: "B",
            type: "linear",
            position: "right",
            ticks: {
              max: 1,
              min: 0,
            },
          },
          {
            id: "C",
            type: "linear",
            position: "right",
          },
        ],
      },
    },
  });
}

window.onload = drawChart;
