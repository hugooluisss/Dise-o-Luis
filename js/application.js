$(document).ready(function(){
	$("#menu").show();
	$("[show=menu]").click(function(){
		$("#menu").toggleClass("show");
	});
});