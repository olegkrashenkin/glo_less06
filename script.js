'use strict'

const btnStart = document.querySelector('.start')

const game = (num = Math.floor(Math.random() * 100) + 1) => {
    let count = 10
    console.log(num);
    const isCount = (flag = true) => {
        count--
        if (count === 0) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                return game()
            } else {
                alert('Игра окончена')
                return
            }
        }
        flag
            ? alert(`Загаданное число больше, осталось попыток: ${count}`)
            : alert(`Загаданное число меньше, осталось попыток: ${count}`)
        return start()
    }
    const start = () => {
        console.log(num);
        let userNum = prompt('Угадай число от 1 до 100')
        switch (true) {
            case userNum === null: {
                alert('Игра окончена')
                return
            }
            case +userNum === num: {
                if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                    return game()
                } else {
                    alert('Игра окончена')
                    return
                }
            }
            case +userNum < num: {
                isCount()
                return
            }
            case +userNum > num: {
                isCount(false)
                return
            }
            default: {
                alert('Введи число!')
                return start()
            }
        }

    }
    start()
}

btnStart.addEventListener('click', (event) => {
    event.preventDefault()
    game()
})




