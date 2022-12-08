'use strict'

const game = (num = Math.floor(Math.random() * 100) + 1) => {
    let count = 10
    let start = () => {
        if (count > 0) {
            let userNum = +prompt('Угадай число от 1 до 100')
            switch (true) {
                case userNum === 0: {
                    alert('Игра окончена')
                    return
                }
                case userNum === num: {
                    if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                        return game()
                    } else {
                        alert('Игра окончена')
                        return
                    }
                }
                case userNum < num: {
                    count--
                    alert(`Загаданное число больше, осталось попыток: ${count}`)
                    return start()
                }
                case userNum > num: {
                    count--
                    alert(`Загаданное число меньше, осталось попыток: ${count}`)
                    return start()
                }
                default: {
                    alert('Введи число!')
                    return start()
                }
            }
        }
        if (confirm('Попытки закончились, хотите сыграть еще?')) {
            return game()
        } else {
            alert('Игра окончена')
            return
        }
    }
    start()
}

game()

