let X_value = 0
let Y_value = 0
input.onButtonPressed(Button.A, function () {
    X_value = 0
    while (X_value >= 0) {
        led.plot(X_value, 0)
        basic.pause(200)
        basic.clearScreen()
        X_value += 1
    }
})
input.onButtonPressed(Button.B, function () {
    Y_value = 0
    while (Y_value >= 0) {
        led.plot(0, Y_value)
        basic.pause(200)
        basic.clearScreen()
        Y_value += 1
    }
})
