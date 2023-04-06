input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    radio.sendString("$_$")
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedString(function (receivedString) {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showString(receivedString)
})
radio.setGroup(4)
for (let index = 0; index < 5; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.showString("Press A")
basic.showString("<")
