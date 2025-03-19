// JavaScript untuk interaktivitas sederhana
document.querySelectorAll('.device button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('on')) {
            this.classList.remove('on');
            this.classList.add('off');
            this.textContent = 'OFF';
        } else {
            this.classList.remove('off');
            this.classList.add('on');
            this.textContent = 'ON';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('telurChart').getContext('2d');
    const telurChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Produksi Hari Ini', 'Target Produksi'],
            datasets: [{
                label: 'Jumlah Telur',
                data: [300, 500], // Contoh data: 300 telur produksi hari ini, target 500
                backgroundColor: [
                    'rgba(118, 199, 192, 0.6)', // Warna untuk produksi hari ini
                    'rgba(255, 99, 132, 0.6)'  // Warna untuk target produksi
                ],
                borderColor: [
                    'rgba(118, 199, 192, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Jumlah Telur'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Kategori'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(2);
                            label += value + ' (' + percentage + '%)';
                            return label;
                        }
                    }
                },
                legend: {
                    display: false // Sembunyikan legenda karena hanya ada satu dataset
                }
            }
        }
    });
});