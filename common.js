const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body);
    return bodyStyles.getPropertyValue(variavel) || '#000'; // Valor padrão caso a variável não exista
}

const tickConfig = {
    family: getCSS('--font').trim() || 'Arial, sans-serif', // Fonte padrão
    size: 16,
    color: getCSS('--primary-color').trim() || '#333' // Cor padrão
}

// Exemplo de inicialização do gráfico
import { Chart } from 'chart.js'; // Importando Chart.js caso seja necessário

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'My Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: tickConfig.color,
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    font: {
                        family: tickConfig.family,
                        size: tickConfig.size
                    },
                    color: tickConfig.color
                }
            }
        }
    }
});

export { getCSS, tickConfig };
