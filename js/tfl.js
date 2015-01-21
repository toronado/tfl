var mainHeading = document.getElementById('main-heading');
$('#main-menu').on('click', 'a', function() {
	var href = $(this).attr('href');
	mainHeading.innerHTML = href + ' selected!';
	return false;
});