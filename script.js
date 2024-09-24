let leftFlag = document.querySelector("#left-flag")
let rightFlag = document.querySelector("#right-flag")
let leftDiceImage = document.querySelector("#left-dice-image")
let rightDiceImage = document.querySelector("#right-dice-image")
let winnerTitle = document.querySelector("#winner-title")

function rollDices() {
	let player1Roll = Math.floor(Math.random() * 6 + 1)
	let player2Roll = Math.floor(Math.random() * 6 + 1)
	console.log("hola")
	if (player1Roll > player2Roll) {
		winnerTitle.textContent = "Player 1 Wings"
		leftDiceImage.setAttribute("src", "./images/dice" + player1Roll + ".png")
		rightDiceImage.setAttribute("src", "./images/dice" + player2Roll + ".png")
		leftFlag.classList.add("left-flag")
	} else if (player2Roll > player1Roll) {
		winnerTitle.textContent = "Player 2 Wings"
		leftDiceImage.setAttribute("src", "./images/dice" + player1Roll + ".png")
		rightDiceImage.setAttribute("src", "./images/dice" + player2Roll + ".png")
		rightFlag.classList.add("left-flag")
	} else {
		leftFlag.classList.add("left-flag")
		rightFlag.classList.add("left-flag")
		winnerTitle.textContent = "Draw"
		leftDiceImage.setAttribute("src", "./images/dice" + player1Roll + ".png")
		rightDiceImage.setAttribute("src", "./images/dice" + player2Roll + ".png")
	}
}

document.onload = rollDices()
