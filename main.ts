input.onButtonPressed(Button.A, function () {
    turtle.back(1)
    turtle.turnRight()
})
input.onGesture(Gesture.TiltLeft, function () {
    game.pause()
})
input.onButtonPressed(Button.AB, function () {
    turtle.back(3)
    turtle.turnLeft()
})
input.onButtonPressed(Button.B, function () {
    turtle.forward(1)
    turtle.turnLeft()
})
input.onGesture(Gesture.Shake, function () {
    turtle.pen(TurtlePenMode.Down)
})
input.onGesture(Gesture.TiltRight, function () {
    game.resume()
})
