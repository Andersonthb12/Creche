$(function(){

    /*
	$('input[type=text]').focus(function(){
		resetarCampoInvalido($(this));
	})

	$('input[type=email]').focus(function(){
		resetarCampoInvalido($(this));
	})

	$('form#form1').submit(function(e){
		//e.preventDefault();
		var nome = $('input[name=nome]').val();
		var telefone = $('input[name=telefone]').val();
		var email = $('input[name=email]').val();
		var aluno = $('input[name=aluno]').val();

		
		if(verificarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'));
			return false;
		}else if(verificarTelefone(telefone) == false){
			aplicarCampoInvalido($('input[name=telefone]'));
			return false;
		}else if(verificarEmail(email) == false){
			aplicarCampoInvalido($('input[name=email]'));
			return false;
		}else if(verificarAluno(aluno) == false){
			aplicarCampoInvalido($('input[name=nome_aluno]'));
			return false;
		}

		else{
			
		}


		//se chegar até o final é por que está tudo okay!
		
	});

    // Funções para verificar nossos campos

	function verificarNome(nome){
		//contando a quantidade de espaços e os respectivos valores
		if(nome == ''){
			return false;
		}
		var amount = nome.split(' ').length;
		var splitStr = nome.split(' ');
		if(amount >= 2){
			for(var i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
				}else{
					return false;
				}
			}
		}else{
			return false;
		}
	}

	function verificarTelefone(telefone){
		if(telefone == ''){
			return false;
		}

		if(!telefone.match(/^\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}$/) == null){
			return false;
		}
	}

	function verificarEmail(email){
		if(email == ''){
			return false;
		}

		if(email.match(/^[a-z0-9_.]{1,}@[a-z.]{1,}$/) == null){
			return false;
		}
	}


	function verificarAluno(aluno){
		//contando a quantidade de espaços e os respectivos valores
		if(aluno == ''){
			return false;
		}
		var amount = aluno.split(' ').length;
		var splitStr = aluno.split(' ');
		if(amount >= 2){
			for(var i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
				}else{
					return false;
				}
			}
		}else{
			return false;
		}
	}


    //funções para estilizar o campo do formuláro

	function aplicarCampoInvalido(el){
		el.css('color','red');
		el.css('border','2px solid red');
		el.val('Campo Inválido!');
		//el.data('invalido','true');
	}

	function resetarCampoInvalido(el){
		el.css('color','black');
		el.css('border','1px solid #ccc');
		el.val('');
	}
	*/
	



	$('form').submit(function(){

		if(formularioPreenchido()){
				var form = $('form');
				$('form').ajaxSubmit({
					beforeSubmit:function(){
						form.find('input[type=submit]').attr('disabled','true');
						form.find('input[type=submit]').animate({'opacity':'0.4'})
						form.find('input[type=submit]').attr('value','Carregando');

					},
					success:function(data){
						//Aqui você pode inserir uma div, por exemplo.
						//Qualquer mensagem de sucesso, após o formulario ter sido enviado.
						alert('Formulário foi enviado com sucesso!');
						form.find('input[type=submit]').removeAttr('disabled');
						form.find('input[type=submit]').animate({'opacity':'1'})
						form.find('input[type=submit]').attr('value','Enviar');
						form[0].reset();
					}
				});
		}else{
			alert("Campos Vázios não são permitidos!");
		}



		return false;
	})

	function formularioPreenchido(){
		var nome = $('[name=nome]').val();
		var email = $('[name=email]').val();
		var telefone = $('[name=telefone]').val();
		var nome = $('[name=aluno]').val();
		var mensagem = $('[name=mensagem]').val();
		if(nome === '' || email === '' || telefone === '' || mensagem === ''){
			return false;
		}else{
			return true;
		}
	}



			

});