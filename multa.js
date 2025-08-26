function calcularMulta(status, valorBase, taxaAtraso = 0.01) {
    if (status === "devendo") {
        return valorBase;
    }

    if (status === "atraso") {
        return valorBase + (valorBase * taxaAtraso); 
    }

    if (status === "pago") {
        return valorBase; 
    }

    return 0;
}
//Função para cobrar multa de 1% com base no valor total do usuário
