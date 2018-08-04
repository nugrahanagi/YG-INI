$(document).ready(function(){
//button hide
	$('#hide').click(function(){
		$('#id1').hide();
	});
// button show
	$('#show').click(function(){
		$('#id1').show();
	});
//toggle
	$('#toggle').click(function(){
		$('#id1').slideToggle();
	});
// animate
	$('#animate').click(function(){
		$('#id1').animate({
			marginLeft: '250px',
			fontSize: '50px'
		});
	});
	
// balik
// animate
	$('#animate').click(function(){
		$('#id1').animate({
			marginRight: '0px',
			fontSize: '20px'
		});
	}); 

});