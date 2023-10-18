const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'Consumo de Agua - 2023 ',
            data: [4168, 5185, 5200, 6188, 5200, 5180, 6190, 6200, 5176, 5178, 5190, 5191],
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: "#359EF9",
            hoverBackgroundColor: "transparent",
            pointBackgroundColor: "#359EF9",
            borderRadius: 5,
            tension: 0,
            fill: true,
            stepped: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Nombre Usuario - N°02113151',
            }
        },
    }
});