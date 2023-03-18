
let turn = "O"
let conditionX = [];
let conditionO = [];
let result = null
const checkWinner = (boxNumber, turn) => {

    // console.log(boxNumber,turn);
    if (turn == "X") {
        conditionX.push(boxNumber);
        result = winCondition(conditionX);
        if (result) {
            document.getElementById("result").innerHTML = "X is winner"
            checkDouble = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        }
    } else {
        conditionO.push(boxNumber);
        result = winCondition(conditionO);
        if (result) {
            document.getElementById("result").innerHTML = "O is winner"
            checkDouble = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        }
    }
    console.log(conditionO);
    if (conditionO.length == 5 || conditionX.length == 5) {
        document.getElementById("result").innerHTML = "Game Draw"
        checkDouble = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

}
let checkDouble = []
const handleClick = (boxNumber) => {
    if (checkDouble.includes(boxNumber)) {
        return
    }
    checkDouble.push(boxNumber)
    if (turn === "X") {
        let cell = document.getElementById(`cell${boxNumber}`).innerHTML = "O"
        checkWinner(boxNumber, "O")
        document.getElementById("turn-info").innerHTML = "Playes X to Move"
        turn = "O"

    } else {
        let cell = document.getElementById(`cell${boxNumber}`).innerHTML = "X"
        checkWinner(boxNumber, "X")
        document.getElementById("turn-info").innerHTML = "Playes O to Move"

        turn = "X"
    }

}

const handelRestart = () => {
    // location.reload();
    let cells = document.getElementsByClassName('cell')
    for (let cell of cells) {
        cell.innerHTML = ""
    }
    document.getElementById("turn-info").innerHTML = "Playes X to Move"
    document.getElementById("result").innerHTML = ""

    checkDouble = []
     turn = "O"
     conditionX = [];
     conditionO = [];
     result = null
}

function winCondition(array) {
    const pairs = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [7, 5, 3]
    ]
    for (let i = 0; i < pairs.length; i++) {
        const [num1, num2, num3] = pairs[i];
        if (array.includes(num1) && array.includes(num2) && array.includes(num3)) {
            return true;
        }
    }
    return false;
}