$(document).ready(function(){
	$(".header-right").click(function() {
		$("#modal-container").show();
	})

	$("#submit").click(function() {
		$("body").addClass("signed_in");
	})

	$("#cancel").click(function() {
		$("#modal-container").hide();
	})

	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	})


	$(".special").click(function() {
		$("#modal-container_2").show();
	})

	$("#cancel_2").click(function() {
		$("#modal-container_2").hide();
	})

	$("#modal-overlay_2").click(function() {
		$("#modal-container_2").hide();
	})

	$(".po").click(function() {
		$("#modal-container_3").removeClass("try");
	})

	$("#cancel_3").click(function() {
		$("#modal-container_3").addClass("try");
	})

	$("#modal-overlay_3").click(function() {
		$("#modal-container_3").addClass("try");
	})



	$("#new_post").click(function() {
		$("#modal-container_4").removeClass("try");
	})

	$("#cancel_3").click(function() {
		$("#modal-container_4").addClass("try");
	})

	$("#modal-overlay_3").click(function() {
		$("#modal-container_4").addClass("try");
	})

	
});