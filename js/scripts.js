var clock;

$(document).ready(function() {

	// Grab the current date
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	var currentDate = new Date(yyyy,mm,dd,0,0,0,0);

	// Set some date in the future. In this case, it's always Jan 1
	//var futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);
	var futureDate  = new Date(2015, 7, 8, 9, 25, 0, 0);
	var damoComesDate  = new Date(2015, 7, 10, 18, 05, 0, 0);


	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	var damoComes = damoComesDate.getTime() / 1000 - currentDate.getTime() / 1000;


	// Instantiate a coutdown FlipClock
	clock = $('.dw_clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: false
	});

	clock2 = $('.dw_clock2').FlipClock(damoComes, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: true
	});

	clock3 = $('.dw_clock3').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: true
	});
});