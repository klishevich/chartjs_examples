function drawChart() {
  var data_array = [20, 22, 24, 28, 30];

  var ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "BAR",
          data: data_array,
          backgroundColor: "rgba(0, 119, 290, 0.5)",
          borderColor: "rgba(0, 119, 290, 0.6)",
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Auto Range'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: - 5,
              max: Math.max.apply(this, data_array) + 5,
              stepSize: 5,
            },
          },
        ],
      },
    },
  });
}

window.onload = drawChart;
