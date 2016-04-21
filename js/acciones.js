jQuery(document).ready(function() {
    $(document).on('swipeleft',swipeLeft);
	$(document).on('swiperight',swipeRight);
	
	function swipeLeft(event){
		$.mobile.changePage("#seguros",{transition:"slide"})
	}
	function swipeRight(event){
		$.mobile.changePage("#principal",{transition:"slide"})
	}
});