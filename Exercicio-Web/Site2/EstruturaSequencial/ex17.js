// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

let arquivo_mb = Number(prompt('Digite o tamanho do arquivo'));
let vel_internetTotal = Number(prompt('Qual a velocidade da internet ?'));

let download = arquivo_mb / vel_internetTotal;

if (download > 60) {
    download = download / 60;
    alert(`Download em ${download.toFixed(1)} minutos`);
} else {
    alert(`Download em ${download.toFixed(1)} segundos`);
}