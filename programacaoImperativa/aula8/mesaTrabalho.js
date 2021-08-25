

function podeSubir(altura, acompanhada) {
    if (altura >= 1.4 && altura < 2.0) {
        return 'Acesso autorizado';
    } else if (altura >= 1.2 && altura < 1.40 && acompanhada) {
        return 'Acesso autorizado somente com acompanhante';
    }
    return 'Acesso negado';

}


console.log(podeSubir(1.3, true));

