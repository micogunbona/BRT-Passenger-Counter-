// document.getElementById("count").innerText = 5

// let count = 5

// console.log(count)

/* function increment()	{
	console.log("The button was clicked")
} */

//function run()	{
//	console.log(42)
// }

// run(42)

//function logLapTime()	{
//	let totalTime = lap1 + lap2 + lap3
//	console.log(totalTime)
//}


/* h na let lapsCompleted = 0

//Create a function that increments the lapsCompleted variable with one 
//Run it three times

function incrementLap()	{
	lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted) */
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)
function increment()	{
	count += 1
	countEl.textContent = count
}

function save()	{
	let countStr = count + " - "
	saveEl.textContent += countStr
	countEl.textContent = 0
	count = 0
}