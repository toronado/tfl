var mainHeading = document.getElementById('main-heading');
$('#main-menu').on('click', 'a', function() {
	var href = $(this).attr('href');
	mainHeading.innerHTML = href + ' selected!';
	return false;
});

$('#button').on('click', function() {
	getStns();
});

function getStns(line) {
	$.ajax({
        url: 'resources/station-data/circle.js',
        dataType: 'json',
        timeout: 30000
    })
    .done(function (data){
    	var $results = $('#stations');
		var i;
		var d = data.length;
		var count = 0;

		for (i=0; i<d; i++) {
			for (var prop in data[i]) {
            	if (prop == 'naptanId') {
            		var naptanId = data[i]['naptanId'].substring(8,11);
            		var name = data[i]['commonName'].replace(' Underground Station', '');
            		var lines = data[i]['lineModeGroups'];
            		$results.append('<p value="'+naptanId+'">'+name+ ' - ' + naptanId + ' - ' + lines[lines.length-1].lineIdentifier + '</p>');
            		break;
            	}
            	count+=1;
        	}
		}
		console.log(count);
    });
}