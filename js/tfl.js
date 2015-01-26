$('#main-menu').on('click', 'a', function() {
	var line = $(this).attr('href').split('#')[1];
	getStns(line);
	return false;
});

function getStns(line) {

	$.ajax({
        url: 'resources/station-data/'+line+'.js',
        dataType: 'json',
        timeout: 30000
    })
    .done(function (data){
    	var $results = $('#stations');
    	var stations = '';
		var i;
		var d = data.length;
		var count = 0;

		for (i=0; i<d; i++) {
			for (var prop in data[i]) {
            	if (prop == '$type') {
            		var naptanId = data[i]['naptanId'].substring(8,11);
            		var name = data[i]['commonName'].replace(' Underground Station', '');
            		var lineType = data[i]['lineModeGroups'].length;
            		var lines = '';
            		for (var j=0; j<lineType; j++) {
            			if (data[i]['lineModeGroups'][j].modeName === 'tube') {
            				lines = data[i]['lineModeGroups'][j].lineIdentifier;
            				break;
            			}
            		}
            		stations += '<li value="'+naptanId+'">' + naptanId + ' - ' + name + ' - ' + lines + '</li>';
            		count+=1;
            		break;
            	}
        	}
		}
		$results.html('<h2>'+line+' line - '+count+' stations</h2>' + '<ul class="'+line+'">' + stations + '</ul>');
    });
}