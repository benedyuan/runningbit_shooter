input.onButtonPressed(Button.B, function () {
    music.playMelody("A - - - A - - A ", 500)
    music.playMelody("A - - - F - - C5 ", 500)
    music.playMelody("A - - - F - - C5 ", 500)
    music.playMelody("A A A - - - - - ", 500)
    SuperBit.Servo2(SuperBit.enServo.S1, 135)
    basic.pause(500)
    SuperBit.Servo2(SuperBit.enServo.S1, 105)
})
SuperBit.Servo2(SuperBit.enServo.S1, 105)
