input.onButtonPressed(Button.A, function () {
    basic.showNumber(walk)
})
input.onGesture(Gesture.Shake, function () {
    walk += 1
})
input.onButtonPressed(Button.AB, function () {
    walk = 0
    basic.showNumber(walk)
})
let walk = 0
basic.showNumber(walk)
