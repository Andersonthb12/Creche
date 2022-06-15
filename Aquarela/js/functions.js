$(function(){
	//mask formulário

    $('input[name=telefone]').mask('(99) 99999-9999');
    



    $(document).ready(function() {
	  $('.mosaico-img').magnificPopup({type:'image'});
	});


    $('.mosaico-wraper').magnificPopup({
  		delegate: 'a', // child items selector, by clicking on it popup will open
  		type: 'image',
  		gallery:{enabled:true}
  	});




   
});