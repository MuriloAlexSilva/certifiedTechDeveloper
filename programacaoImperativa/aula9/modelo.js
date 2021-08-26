function obterUmCargo(salario) {
    let cargo;
    if (salario < 2500.00) {
        cargo = 'Junior';
    } else if (salario < 5000.00) {
        cargo = 'Pleno';
    } else if (salario < 10000.00) {
        cargo = 'Senior';
    }
    console.log(cargo);
    return cargo;
}

function obterSalarioMaximoPeloCargo(cargo) {
    let salarioMaximo = 0.0;
    switch (cargo) {
        case 'Junior':
            salarioMaximo = 2500.00;
            break;
        case 'Pleno':
            salarioMaximo = 5000.00;
            break;
        case 'Senior':
            salarioMaximo = 10000.00;
            break;

        default:
            salarioMaximo = 1000000.00;

    }
    console.log('Salario Máximo: R$' + salarioMaximo);
    return salarioMaximo;
}

obterSalarioMaximoPeloCargo(obterUmCargo(8000));

//Ternario
// function salarioTernario(salario) {
//     let cargo = salario < 2500.00 ? 'Junior' :
//      salario < 5000.00 ? 'Pleno' :
//       salario < 10000.00 ? 'Senior' : '';
//       console.log(cargo);
//       return cargo;
// }
// salarioTernario(5200);

