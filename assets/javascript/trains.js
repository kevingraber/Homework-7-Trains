var trainData = new Firebase("https://train-times.firebaseio.com/");

var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = 0;
var arrival = 0;
var wait = 0;

$("#submit").click(function() {
	trainName = $("#nameInput").val().trim();
	destination = $("#destinationInput").val().trim();
	firstTrain = $("#timeInput").val().trim();
	frequency = $("#frequencyInput").val().trim();

	console.log(trainName)
	console.log(destination)
	console.log(firstTrain)
	console.log(frequency)

	trainData.push ({
		trainName: trainName,
		destination: destination,
		fristTrain: firstTrain,
		frequency: frequency
	});

});

trainData.on('child_added', function(childSnapshot, prevChildKey) {

	console.log( moment("2016-3-13 02:12").format("X") )
	console.log( moment().format("X") )

	var time1 = moment("2016-3-13 02:12").format("X")
	var time2 = moment().format("X")

	var time3 = time2 - time1
	console.log(time3)
	console.log(Math.floor(time3/60))
	var minutes = Math.floor(time3/60)
	console.log(childSnapshot.val().frequency)

	var next = (minutes%childSnapshot.val().frequency)
	console.log(next)
	console.log(childSnapshot.val().frequency - next)

	// =================================================================

	var trainDiv = $("<tr>");

	var nameTD = $("<td>");
	nameTD.append(childSnapshot.val().trainName);

	var destinationTD = $("<td>");
	destinationTD.append(childSnapshot.val().destination);

	var frequencyTD = $("<td>");
	frequencyTD.append(childSnapshot.val().frequency);

	

	// var nameTD = ("<td>")
	// nameTD.append(childSnapshot.val().name)

	// var nameTD = ("<td>")
	// nameTD.append(childSnapshot.val().name)

	trainDiv.append(nameTD);
	trainDiv.append(destinationTD);
	trainDiv.append(frequencyTD);

	$("#contentTable").append(trainDiv)



}, function(errorObject){

		console.log("Errors handled: " + errorObject.code);

});

// var time = "02:12"
// var convertedTime = moment(new Date(time));

// console.log(moment(convertedTime, "hmm").format("X"))

// ==========================================================

// console.log( moment("2016-3-13 02:12").format("X") )
// console.log( moment().format("X") )

// var time1 = moment("2016-3-13 02:12").format("X")
// var time2 = moment().format("X")

// var time3 = time2 - time1
// console.log(time3)
// console.log(Math.floor(time3/60))
// var minutes = Math.floor(time3/60)
// console.log(minutes)

// var next = (minutes%23)
// console.log(next)
// console.log(23 - next)

// unix time of the current time minus thegfdfdfrdme of the start time. Then take the modulo/remainder of that number and the frequency of the train ex: 1234%23 and subrtact the modulo from the frequency of the train to get the minutes remaining ex: 23-15 = 8 min remaining?
// ===========================================================