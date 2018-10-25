function calcular(){

	var peso1 = document.dados.peso.value;
	var altura1 = document.dados.altura.value;

	var IMC=parseFloat((peso1/(altura1*altura1)).toFixed(2));

	document.dados.ihcl.value=IMC;

	if(IMC < 18.5){		
		document.dados.Resultado.value="SUBNUTRIÇÃO"
		document.dados.pesoIdeal.value='Entre:' + ' ' + parseFloat((18.5*(altura1*altura1)).toFixed(2)) + ' ' + 'e' +' ' + parseFloat((24.9*(altura1*altura1)).toFixed(2));
	}

	else if (IMC >=18.5 && IMC <= 24.9){
		document.dados.Resultado.value="PESO SAUDÁVEL"
		document.dados.pesoIdeal.value="VOCÊ ESTÁ NO PESO IDEAL"
	}

	else if (IMC >=25.0 && IMC <= 29.9){
		document.dados.Resultado.value="SOBRE PESO"
		document.dados.pesoIdeal.value='Entre:' + ' ' + parseFloat((18.5*(altura1*altura1)).toFixed(2)) + ' ' + 'e' +' ' + parseFloat((24.9*(altura1*altura1)).toFixed(2));
	}

	else if (IMC >=30.0 && IMC <= 34.9){
		document.dados.Resultado.value="OBESIDADE GRAU 1"
		document.dados.pesoIdeal.value='Entre:' + ' ' + parseFloat((18.5*(altura1*altura1)).toFixed(2)) + ' ' + 'e' +' ' + parseFloat((24.9*(altura1*altura1)).toFixed(2));
	}

	else if (IMC >=35.0 && IMC < 39.9){
		document.dados.Resultado.value="OBESIDADE GRAU 2"
		document.dados.pesoIdeal.value='Entre:' + ' ' + parseFloat((18.5*(altura1*altura1)).toFixed(2)) + ' ' + 'e' +' ' + parseFloat((24.9*(altura1*altura1)).toFixed(2));
	}

	else if (IMC >=40.0){
		document.dados.Resultado.value="OBESIDADE GRAU 3"
		document.dados.pesoIdeal.value='Entre:' + ' ' + parseFloat((18.5*(altura1*altura1)).toFixed(2)) + ' ' + 'e' +' ' + parseFloat((24.9*(altura1*altura1)).toFixed(2));
	}

}