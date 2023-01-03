let capA = 80000;
let capB = 200000;
let taxa_paisA = 0.03;
let taxa_paisB = 0.015;
let paisA, paisB, newCapA, newCapB

paisA = capA
paisB = capB

for(let ano = 0; paisA <= paisB; ano++){
    capA = capA + capA * taxa_paisA
    capB = capB + capB * taxa_paisB

    paisA = capA
    paisB = capB
    console.log(ano)
}
