
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        
        labels: ['Web Dev', 'C Language', 'Math', 'ML', 'IPDC'],
        
        datasets: [{
            label: 'Marks out of 100',
            // Your actual marks
            data: [90, 80, 70, 85, 95],
            
            
            backgroundColor: [
                '#4e73df', 
                '#1cc88a', 
                '#36b9cc', 
                '#f6c23e', 
                '#e74a3b'
            ],
            borderWidth: 1
        }]
    },
    options: {
        
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100 
            }
        }
    }
});