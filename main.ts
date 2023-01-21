enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    recived = receivedNumber
    if (hasSend != 0) {
        onFinish()
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (hasSend == 0) {
        if (sellected >= 0) {
            sellected += -1
        } else {
            sellected = 2
        }
        drawSymbol()
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (hasSend == 0) {
        hasSend += 1
        radio.sendNumber(sellected)
        if (recived != -1) {
            onFinish()
        }
    }
})
function drawSymbol () {
    if (sellected == 0) {
        images.createImage(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `).showImage(0)
    } else if (sellected == 1) {
        images.createImage(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `).showImage(0)
    } else {
        images.createImage(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `).showImage(0)
    }
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (hasSend == 0) {
        if (sellected <= 1) {
            sellected += 1
        } else {
            sellected = 0
        }
        drawSymbol()
    }
})
function onFinish () {
    if (recived == sellected) {
        images.iconImage(IconNames.Asleep).showImage(0)
    } else if (winList[sellected] == recived) {
        images.iconImage(IconNames.Happy).showImage(0)
    } else {
        images.iconImage(IconNames.Sad).showImage(0)
    }
    basic.pause(1000)
    reset()
}
function reset () {
    sellected = 0
    hasSend = 0
    recived = -1
    drawSymbol()
}
let sellected = 0
let hasSend = 0
let recived = 0
let winList: number[] = []
radio.setGroup(187)
winList = [2, 0, 1]
reset()
