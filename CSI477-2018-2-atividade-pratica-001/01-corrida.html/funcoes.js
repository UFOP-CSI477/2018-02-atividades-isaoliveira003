function sortfunction(a, b){
  return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
}

function vencedor(){

	var l1 = document.dadosTeste.largada1.value;
	var c1 = document.dadosTeste.competidor1.value;
	var t1 = parseInt(document.dadosTeste.tempo1.value);

	var l2 = document.dadosTeste.largada2.value;
	var c2 = document.dadosTeste.competidor2.value;
	var t2 = parseInt(document.dadosTeste.tempo2.value);

	var l3 = document.dadosTeste.largada3.value;
	var c3 = document.dadosTeste.competidor3.value;
	var t3 = parseInt(document.dadosTeste.tempo3.value);

	var l4 = document.dadosTeste.largada4.value;
	var c4 = document.dadosTeste.competidor4.value;
	var t4 = parseInt(document.dadosTeste.tempo4.value);

	var l5 = document.dadosTeste.largada5.value;
	var c5 = document.dadosTeste.competidor5.value;
	var t5 = parseInt(document.dadosTeste.tempo5.value);

	var l6 = document.dadosTeste.largada6.value;
	var c6 = document.dadosTeste.competidor6.value;
	var t6 = parseInt(document.dadosTeste.tempo6.value);

	var vetor=[];
	vetor = [{"tempo":t1, "competidor":c1, "largada":l1}, {"tempo":t2, "competidor":c2, "largada":l2}, {"tempo":t3, "competidor":c3, "largada":l3}, {"tempo":t4, "competidor":c4, "largada":l4}, {"tempo":t5, "competidor":c5, "largada":l5}, {"tempo":t6, "competidor":c6, "largada":l6}];
	
	vetor.sort(function(obj1,obj2){return obj1.tempo - obj2.tempo;});

	document.dadosTeste.largada1.value=vetor[0].largada;
	document.dadosTeste.competidor1.value=vetor[0].competidor;
	document.dadosTeste.tempo1.value=vetor[0].tempo;
	document.dadosTeste.posicao1.value="1";
	document.dadosTeste.resultado1.value="VENCEDOR!";

	document.dadosTeste.largada2.value=vetor[1].largada;
	document.dadosTeste.competidor2.value=vetor[1].competidor;
	document.dadosTeste.tempo2.value=vetor[1].tempo;
	if(vetor[1].tempo==vetor[0].tempo){
	document.dadosTeste.posicao2.value="1";
	document.dadosTeste.resultado2.value="VENCEDOR!"}
	else {document.dadosTeste.posicao2.value="2";
	document.dadosTeste.resultado2.value=" "}

	document.dadosTeste.largada3.value=vetor[2].largada;
	document.dadosTeste.competidor3.value=vetor[2].competidor;
	document.dadosTeste.tempo3.value=vetor[2].tempo;
	document.dadosTeste.posicao3.value="3";
	document.dadosTeste.resultado3.value=" ";

	document.dadosTeste.largada4.value=vetor[3].largada;
	document.dadosTeste.competidor4.value=vetor[3].competidor;
	document.dadosTeste.tempo4.value=vetor[3].tempo;
	document.dadosTeste.posicao4.value="4";
	document.dadosTeste.resultado4.value=" ";

	document.dadosTeste.largada5.value=vetor[4].largada;
	document.dadosTeste.competidor5.value=vetor[4].competidor;
	document.dadosTeste.tempo5.value=vetor[4].tempo;
	document.dadosTeste.posicao5.value="5";
	document.dadosTeste.resultado5.value=" ";

	document.dadosTeste.largada6.value=vetor[5].largada;
	document.dadosTeste.competidor6.value=vetor[5].competidor;
	document.dadosTeste.tempo6.value=vetor[5].tempo;
	document.dadosTeste.posicao6.value="6";
	document.dadosTeste.resultado6.value="";



	/*for (var i = 1; i<=6; i++) {
		tr+="<tr>";
		tr+="<td>" + (i + 1)+ "</td>";
		tr+="<td>" + i +"</td>";
		tr+="<td>" +vetor[i].largada + "</td>";
		tr+="<td>" +vetor[i].competidor + "</td>";
		tr+="<td>" +vetor[i].tempo + "</td>";

		if(i<=2){
			tr+="<td>" +"VENCEDOR!" + "</td>";
		}
		else {tr+="<td></td>";}
	};*/
};