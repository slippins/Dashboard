
var ctx = document.getElementById('salesChart');
var salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: 'Sales per hour',
            data: [3, 0, 5, 15, 43, 50, 53, 41, 60, 80, 82, 112],
            backgroundColor: 'rgba(0, 0, 150, 0.5)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1,
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 3,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});