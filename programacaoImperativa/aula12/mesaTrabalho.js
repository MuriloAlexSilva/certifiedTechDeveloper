const alicia = [23, 69, 32];
 const bob = [12, 67, 43];
 
 function encontrarGanhador(a, b) {
    let aWin = 0;
    let bWin = 0;
    for (let i = 0; i < b.length; i++) {
    
      if (a[i] > b[i]) {
        aWin = aWin+1;
      }else if(b[i] > a[i]){
        bWin = bWin+1;
      }
        
    }
    if(aWin > bWin){
        console.log(`Alicia é a vencedora com ${aWin} pontos`);
    }else if(aWin < bWin){
        console.log(`Bob é o vencedor com ${bWin} pontos`);

    }else {
        console.log('Houve empate entre os jogadores!!!')
    }
}

 encontrarGanhador(alicia,bob);