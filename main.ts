let X_value = 0
let Y_value = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (X_value >= 4) {
        Y_value = 0
    }
    if (X_value <= 0) {
        Y_value = 1
    }
    if (X_value == 0) {
        X_value += -1
        basic.clearScreen()
        led.plot(X_value, Y_value)
        basic.pause(200)
    }
    if (X_value == 1) {
        X_value += 1
        basic.clearScreen()
        led.plot(X_value, Y_value)
        basic.pause(200)
    }
})
