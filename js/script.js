$("#form_q").on("submit", function(){
	$.ajax({
		url: 'https://60376bfd5435040017722533.mockapi.io/form',
		method: 'post',
		dataType: 'html',
		data: $(this).serialize(),
		success: function(data){
			$('#message').html(data);
		},
        error: function(data){
            alert('Плохо');
        }
	});
});