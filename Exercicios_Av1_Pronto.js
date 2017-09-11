
// Exercicio01 AV1***************************************************************

function Exercicio01(n1,n2){
   var media = (n1+n2)/2;
   return media;
}
Exercicio01(2,5);

// Exercicio02 AV1***************************************************************

var AV1;
var AV2;

function Exercicio02(AV1,AV2){
	
	var media = (AV1+AV2)/2;
	
    if(AV1<=4 || AV2 <=4){ 
        //return true;
        console.log("Você deve fazer a AV3");
	       
	}else if(media >=6){
		//return false;
		console.log(" Parabéns você foi Aprovado!");
	}
    else {
        //return true;
        console.log("Você deve fazer a AV3, Porque não alcançou a Média!");
    }

}
Exercicio02(4,4);


// Exercicio03 AV1****************************************************************

var num;
var x;
function ForExercicio03(num){
	for(var i= 1; i <= num; i++){
        x = i;
        console.log("Sequência: " + x);
    }
}

ForExercicio03(6);
// Exercicio04 AV1****************************************************************

var x;
var y;
var cont;
var n1;
var n2;

function Exercicio04(n1,n2){
	
	for(cont = n1; cont< n2; cont++){
		
		x = cont;
		
	    if (x % n1==0){
			
			console.log (x);
		}
        		 
	}	
}
Exercicio04(7,50);

// Exercicio05 AV1****************************************************************

// Funcao para retornar o menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};

// Agora e so pegar os resultados
var random = [10, 0, 60, 90, 63, 8];  // Nosso array
console.log( Array.min(random) ); // Menor valor
console.log( Array.max(random) ); // Maior valor
//********************************************************************************

   

  