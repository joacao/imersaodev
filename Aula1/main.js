var quantidadeBitcoins = 64;
var valorBitcoin = 179698.70;
var nomeUsuario = 'Joaquim'
var cotacaoAtual = quantidadeBitcoins*valorBitcoin
cotacaoAtual = cotacaoAtual.toFixed([2]);

var quantidadeAnosLuz = 33
var anosLuzEmMetros = 9460536207068016


alert ('Para comprar '+quantidadeBitcoins+' Bitcoins hoje você precisa desembolsar R$ '+cotacaoAtual+' você tem esse dinheiro '+nomeUsuario+'?'+
    ' em relação aos Anos Luz '+quantidadeAnosLuz+' são '+quantidadeAnosLuz*anosLuzEmMetros+' metros'
);