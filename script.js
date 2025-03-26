const leftFlag = document.querySelector("#left-flag")
const rightFlag = document.querySelector("#right-flag")
const leftDiceImage = document.querySelector("#left-dice-image")
const rightDiceImage = document.querySelector("#right-dice-image")
const winnerTitle = document.querySelector("#winner-title")
const rollDiceButton = document.querySelector("#roll-dice-btn")
 


function rollDices() {

	leftFlag.classList.remove("left-flag")
    rightFlag.classList.remove("left-flag")
	
	let player1Roll = Math.floor(Math.random() * 6 + 1)
	let player2Roll = Math.floor(Math.random() * 6 + 1)
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
rollDiceButton.addEventListener('click', rollDices)
rollDiceButton.addEventListener('click', ()=>{
	rollDiceButton.style.transform = 'scale(1.1)'
	setTimeout(() => {
		rollDiceButton.style.transform = 'scale(1)';
	  }, 200)
})