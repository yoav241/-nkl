input.onButtonPressed(Button.A, function () {
    כי += -1
})
input.onButtonPressed(Button.B, function () {
    כי += 1
})
let כי = 1
basic.forever(function () {
    basic.showNumber(כי)
    if (כי == 1) {
        music.play(music.stringPlayable("B G C5 A B D E C ", 119), music.PlaybackMode.UntilDone)
    }
})
