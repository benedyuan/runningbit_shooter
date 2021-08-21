input.onButtonPressed(Button.B, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 135)
    basic.pause(500)
    SuperBit.Servo2(SuperBit.enServo.S1, 105)
})
SuperBit.Servo2(SuperBit.enServo.S1, 105)
