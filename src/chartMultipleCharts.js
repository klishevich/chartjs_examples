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
        {
          label: "Line Dataset",
          data: [10, 20, 30, 40],
          type: "line",
        },
        {
          label: "Line 2 Dataset",
          data: [22, 33, 44, 50],
          type: "line",
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Multiple Charts'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              stepSize: 5,
            },
          },
        ],
      },
    },
  });
}

window.onload = drawChart;
