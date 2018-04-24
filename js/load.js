$(document).ready(function() {
						   
	var hash = window.location.hash.substr(1);
	var href = $('#nav li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length - 5)){
			var toLoad = hash + '.html #bs';
			$('#bs').load(toLoad)
		}											
	});

	$('#menu-wrap li a').click(function(){
								  
		var toLoad = $(this).attr('href') + ' #bs';
		$('#wrapper').hide('fast',loadContent);
		$('#load').remove();
		$('.content').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length - 5);
		function loadContent() {
			$('#bs').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#bs').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	});

});