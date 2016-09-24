$(document).ready(function(){

		$('#addBtn').on('click', function () {
			var newReservation = {
				name: $('#name').val().trim(),
				phone_number: $('#phonenumber').val().trim(),
				email: $('#email').val().trim()
			};

			var currentURL = window.location.origin;

			// Question: What does this code do??
			$.post('https://glacial-falls-73483.herokuapp.com/api/new', newReservation)
				.done(function (data) {
					console.log(data);
					alert('Adding reservation');
				});

			window.location = '/tables';
		});
});
