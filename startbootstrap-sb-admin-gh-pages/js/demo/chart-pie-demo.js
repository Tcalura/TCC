// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Banho","Tosa","Castração","Consulta","Vacinação","Outros"],
    datasets: [{
      data: [33.21, 15.58, 11.25, 8.32, 9.14, 2],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#6c5800', '#000000'],
    }],
  },
});
