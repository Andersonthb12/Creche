<!DOCTYPE html>
	<html lang="pt-br">
	<head>
		<title>CEAF</title>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="stylesheet" href="css/slick.css">
		<link rel="stylesheet" href="css/magnific-popup.css">
		<link rel="stylesheet" href="css/style.css" type="text/css"/>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
		<meta name="description" content="Escola e creche infantil, do berçário ao ensino fundamental I">
		<meta name="keywords" content="escola,infantil,infancia,ensino,criança,infantilidade,compreenssão,escolas,fundamental,filho,cuidado,freguesia,Freguesia,jacarepaguá,capoeira,informatica,educação,brincadeira,jogos,aprendizado">
		<meta name="author" content="" />
		<link rel="shortcut icon" type="imagem-x/png" href="imagens/creche.png">
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-3Z1YB5BG2Z"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'G-3Z1YB5BG2Z');
		</script>
	</head>

	<body>
		<header>
			<div class="container">
				<div class="logo">
					<a href="home"><img src="imagens/creche.png"/></a>
				</div><!--logo-->

				<nav class="menu-desktop">
					<ul>
						<li><a href="home">Home</a></li>
						<li><a href="sobre">sobre</a></li>
						<li><a href="#contato">contato</a></li>
						<li><a href="#social">Siga-nos</a></li>
					</ul>
				</nav><!--menu-desktop-->

				<nav class="menu-mobile">
					<ul>
						<li><a href="home">Home</a></li>
						<li><a href="sobre">sobre</a></li>
						<li><a href="#contato">contato</a></li>
						<li><a href="#social">Siga-nos</a></li>
					</ul>
				</nav><!--menu-mobile-->
				<div class="clear"></div><!--clear-->
			</div><!--container-->
		</header>


		<?php
			
			if(isset($_GET['url'])){
				if(file_exists($_GET['url'].'.html')){
					include($_GET['url'].'.html');
				}else{
					include('404.html');
				}
			}else{
				include('home.html');
			}

		?>



		<section  id="contato" class="contato">
			<div class="line-titulo">
				<h2>entre em contato</h2>
			</div><!--line-titulo-->

			<form method="post" action="form.php" id="form1">
				<input required type="hidden" name="nome do formulário" value="Formulário 1">
				<div class="input-wraper w100">
					<input placeholder="Nome*" type="text" name="nome" >
				</div><!--input-wraper w100-->

				<div class="input-wraper w50">
					<input placeholder="E-mail*" type="email" name="email" >
				</div><!--input-wraper w50-->

				<div class="input-wraper w50">
					<input placeholder="Telefone*" type="text" name="telefone" >
				</div><!--input-wraper w50-->

				<div class="input-wraper w100">
					<input placeholder="Nome da criança*" type="text" name="aluno" >
				</div><!--input-wraper w100-->

				<div class="input-wraper w100">
					<textarea name="mensagem" placeholder="Deixe sua mensagem para te conhecermos melhor"></textarea>
				</div><!--input-wraper w100-->

				<div class="input-wraper w100">
					<input class="btn1" type="submit" value="Enviar">
				</div><!--input-wraper w100-->

				<div class="clear"></div>
			</form>

		</section><!--contato-->



		<footer id="social">
			<div class="container">		
				<div  class="extras">
		            <div class="social-media">
		                <a href="https://www.facebook.com/ceafaquarela"><img style="width: 30px;" src="imagens/face1.png"></a>
		                <a href="https://www.instagram.com/ceafaquarela/"><img style="width: 70px;" src="imagens/insta1.png"></a>
		            </div>
		    	</div><!--extras-->

		    	<div class="direitos">
		    		<div class="reservados">
		    			<p>© Todos os direitos reservados | <a href="https://www.instagram.com/thomasitecnology/">Thomasi Tecnology</a></p>
		    		</div>
		    	</div>
				<div class="clear"></div>
			</div><!--container-->
		

		</footer>

		<script src="js/jquery.js"></script>
		<script src="js/jquery.ajaxform.js"></script>
		<script src="js/slick.js"></script>
		<script src="js/mask.js"></script>
		<script src="js/magnific-popup.js"></script>
		<script src="js/menu_responsivo.js"></script>
		<script src="js/menuScroll.js"></script>
		<script src="js/formulario.js"></script>
		<script src="js/slider.js"></script>
		<script src="js/functions.js"></script>
	</body>
</html>