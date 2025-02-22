function drawmenuicon () {
    display.clear()
    if (gameselect == 0) {
        display.setMatrixColor(1, 0, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(6, 0, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(2, 1, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(3, 1, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(4, 1, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(5, 1, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(1, 2, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(2, 2, GAME_ZIP64.colors(ZipLedColors.White))
        display.setMatrixColor(3, 2, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(4, 2, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(5, 2, GAME_ZIP64.colors(ZipLedColors.White))
        display.setMatrixColor(6, 2, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(0, 3, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(1, 3, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(2, 3, GAME_ZIP64.colors(ZipLedColors.White))
        display.setMatrixColor(3, 3, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(4, 3, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(5, 3, GAME_ZIP64.colors(ZipLedColors.White))
        display.setMatrixColor(6, 3, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(7, 3, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(0, 4, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(1, 4, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(2, 4, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(3, 4, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(4, 4, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(5, 4, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(6, 4, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(7, 4, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(1, 5, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(2, 5, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(5, 5, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(6, 5, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(0, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(2, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(5, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(7, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(0, 7, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(7, 7, GAME_ZIP64.colors(ZipLedColors.Red))
    }
    if (gameselect == 1) {
        display.setMatrixColor(2, 0, GAME_ZIP64.rgb(255, 0, 0))
        display.setMatrixColor(3, 0, GAME_ZIP64.rgb(255, 0, 0))
        display.setMatrixColor(4, 0, GAME_ZIP64.rgb(255, 75, 75))
        display.setMatrixColor(5, 0, GAME_ZIP64.rgb(255, 75, 75))
        display.setMatrixColor(2, 1, GAME_ZIP64.colors(ZipLedColors.Black))
        display.setMatrixColor(3, 1, GAME_ZIP64.rgb(255, 0, 0))
        display.setMatrixColor(4, 1, GAME_ZIP64.rgb(255, 75, 75))
        display.setMatrixColor(5, 1, GAME_ZIP64.colors(ZipLedColors.Black))
        display.setMatrixColor(2, 2, GAME_ZIP64.colors(ZipLedColors.Black))
        display.setMatrixColor(3, 2, GAME_ZIP64.rgb(0, 175, 255))
        display.setMatrixColor(4, 2, GAME_ZIP64.rgb(0, 200, 255))
        display.setMatrixColor(5, 2, GAME_ZIP64.colors(ZipLedColors.Black))
        display.setMatrixColor(2, 3, GAME_ZIP64.rgb(0, 175, 255))
        display.setMatrixColor(3, 3, GAME_ZIP64.rgb(255, 0, 0))
        display.setMatrixColor(4, 3, GAME_ZIP64.rgb(255, 75, 75))
        display.setMatrixColor(5, 3, GAME_ZIP64.rgb(0, 200, 255))
        display.setMatrixColor(1, 4, GAME_ZIP64.colors(ZipLedColors.Black))
        display.setMatrixColor(2, 4, GAME_ZIP64.rgb(200, 0, 0))
        display.setMatrixColor(3, 4, GAME_ZIP64.rgb(255, 0, 0))
        display.setMatrixColor(4, 4, GAME_ZIP64.rgb(255, 75, 75))
        display.setMatrixColor(5, 4, GAME_ZIP64.rgb(255, 100, 100))
        display.setMatrixColor(6, 4, GAME_ZIP64.colors(ZipLedColors.Black))
        display.setMatrixColor(1, 5, GAME_ZIP64.colors(ZipLedColors.Black))
        display.setMatrixColor(2, 5, GAME_ZIP64.rgb(255, 0, 0))
        display.setMatrixColor(5, 5, GAME_ZIP64.rgb(255, 75, 75))
        display.setMatrixColor(6, 5, GAME_ZIP64.colors(ZipLedColors.Black))
        display.setMatrixColor(2, 6, GAME_ZIP64.rgb(255, 0, 0))
        display.setMatrixColor(3, 6, GAME_ZIP64.rgb(255, 0, 0))
        display.setMatrixColor(4, 6, GAME_ZIP64.rgb(255, 75, 75))
        display.setMatrixColor(5, 6, GAME_ZIP64.rgb(255, 75, 75))
        display.setMatrixColor(3, 7, GAME_ZIP64.rgb(140, 140, 140))
        display.setMatrixColor(4, 7, GAME_ZIP64.rgb(175, 175, 175))
    }
    if (gameselect == 2) {
        for (let index = 0; index <= [
        "0,3",
        "1,3",
        "7,4",
        "1,4",
        "2,4",
        "3,4",
        "4,4",
        "5,4",
        "6,4",
        "2,5",
        "3,5",
        "4,5",
        "4,6"
        ].length - 1; index++) {
            display.setMatrixColor(parseFloat([
            "0,3",
            "1,3",
            "7,4",
            "1,4",
            "2,4",
            "3,4",
            "4,4",
            "5,4",
            "6,4",
            "2,5",
            "3,5",
            "4,5",
            "4,6"
            ][index].charAt(0)), parseFloat([
            "0,3",
            "1,3",
            "7,4",
            "1,4",
            "2,4",
            "3,4",
            "4,4",
            "5,4",
            "6,4",
            "2,5",
            "3,5",
            "4,5",
            "4,6"
            ][index].charAt(2)), GAME_ZIP64.colors(ZipLedColors.Green))
        }
        display.setMatrixColor(3, 6, GAME_ZIP64.rgb(0, 150, 0))
        display.setMatrixColor(3, 2, GAME_ZIP64.rgb(150, 50, 30))
        display.setMatrixColor(4, 2, GAME_ZIP64.rgb(150, 50, 30))
        display.setMatrixColor(2, 3, GAME_ZIP64.rgb(150, 50, 30))
        display.setMatrixColor(3, 3, GAME_ZIP64.rgb(150, 50, 30))
        display.setMatrixColor(4, 3, GAME_ZIP64.rgb(150, 50, 30))
        display.setMatrixColor(5, 3, GAME_ZIP64.rgb(150, 50, 30))
        for (let index1 = 0; index1 <= 7; index1++) {
            display.setPixelColorAt(index1 + 56, GAME_ZIP64.rgb(176, 94, 44))
        }
    }
    if (gameselect == 3) {
        for (let index1 = 0; index1 <= 9; index1++) {
            display.setPixelColorAt(index1 + 6, GAME_ZIP64.rgb(255, 255, 255))
        }
        for (let index1 = 0; index1 <= 7; index1++) {
            display.setPixelColorAt(index1 + 48, GAME_ZIP64.rgb(255, 255, 255))
        }
        display.setMatrixColor(6, 0, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(7, 0, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(6, 2, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(7, 2, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(3, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(4, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(3, 7, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(4, 7, GAME_ZIP64.rgb(255, 255, 255))
    }
    if (gameselect == 4) {
        display.showColor(GAME_ZIP64.colors(ZipLedColors.Green))
    }
    display.show()
}
function cg_dc () {
    if (!(cx == 3 || cx == 4)) {
        cx = randint(3, 4)
    }
    if (cx == X && cy == 6) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        cx = randint(3, 4)
        cy = 8
        GAME_ZIP64.runMotor(20)
        score += 1
        if (score > 49) {
            game_running = 0
        } else {
            showscore(score)
        }
    } else {
        display.setMatrixColor(cx, cy, GAME_ZIP64.colors(ZipLedColors.Yellow))
    }
    if (!(cy == 7) && !(cy == 8) && !(cy == 6)) {
        cy += 1
    }
    if (cy == 8) {
        cy = 0
    }
    if (cy == 7) {
        cx = randint(3, 4)
        cy = 8
    }
    if (cy == 6 && !(prevcy == 5)) {
        cy += 1
    }
    prevcy = cy
}
function settingsmenu () {
    loadingscreen(2)
    settingchosen = 0
    current_game = 4
    settingselect = 0
    while (settingchosen == 0) {
        drawsettingicon()
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Right)) {
            settingselect += 1
            basic.pause(200)
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Left)) {
            settingselect += -1
            basic.pause(200)
        }
        if (settingselect < 0) {
            settingselect = 2
        }
        if (settingselect > 2) {
            settingselect = 0
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1) && settingselect == 0) {
            settingchosen = 1
            GAME_ZIP64.runMotor(25)
            display.clear()
            display.show()
            se_brightness()
            settingchosen = 0
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1) && settingselect == 1) {
            settingchosen = 1
            GAME_ZIP64.runMotor(25)
            display.clear()
            display.show()
            se_volume()
            settingchosen = 0
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1) && settingselect == 2) {
            settingchosen = 1
            GAME_ZIP64.runMotor(25)
            display.clear()
            display.show()
            loadingscreen(2)
            gamechosen = 0
        }
    }
}
function si_db () {
    bullety += -1
    display.setMatrixColor(bulletx, bullety, GAME_ZIP64.rgb(255, 240, 0))
    display.show()
}
function drawsettingicon () {
    display.clear()
    if (settingselect == 0) {
        display.setMatrixColor(3, 1, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(4, 1, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 2, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(3, 2, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(5, 2, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(1, 3, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 3, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(3, 3, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(6, 3, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(1, 4, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 4, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(3, 4, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(6, 4, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(3, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(5, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(3, 6, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(4, 6, GAME_ZIP64.rgb(255, 255, 255))
    }
    if (settingselect == 1) {
        showvolumeicon()
    }
    if (settingselect == 2) {
        display.setMatrixColor(3, 0, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(4, 0, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 1, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(3, 1, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(1, 2, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 2, GAME_ZIP64.rgb(255, 255, 255))
        for (let index1 = 0; index1 <= 16; index1++) {
            display.setPixelColorAt(index1 + 24, GAME_ZIP64.rgb(255, 255, 255))
        }
        display.setMatrixColor(1, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 6, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(3, 6, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(3, 7, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(4, 7, GAME_ZIP64.rgb(255, 255, 255))
    }
    display.show()
}
function showvolumeicon () {
    display.clear()
    if (music.volume() == 0) {
        display.setMatrixColor(2, 1, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(1, 2, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 2, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(0, 3, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(1, 3, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 3, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(0, 4, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(1, 4, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 4, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(0, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(1, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(1, 6, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 6, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(2, 7, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(4, 3, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(6, 3, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(5, 4, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(4, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.setMatrixColor(6, 5, GAME_ZIP64.rgb(255, 255, 255))
    } else {
        if (music.volume() < 150) {
            display.setMatrixColor(2, 1, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(1, 2, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 2, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(0, 3, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(1, 3, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 3, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(0, 4, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(1, 4, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 4, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(0, 5, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(1, 5, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 5, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(1, 6, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 6, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 7, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(4, 2, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(5, 3, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(5, 4, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(5, 5, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(4, 6, GAME_ZIP64.rgb(255, 255, 255))
        } else {
            display.setMatrixColor(2, 1, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(1, 2, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 2, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(0, 3, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(1, 3, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 3, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(0, 4, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(1, 4, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 4, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(0, 5, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(1, 5, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 5, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(1, 6, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 6, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(2, 7, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(4, 2, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(5, 3, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(5, 4, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(5, 5, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(4, 6, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(6, 1, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(7, 2, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(7, 3, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(7, 4, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(7, 5, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(7, 6, GAME_ZIP64.rgb(255, 255, 255))
            display.setMatrixColor(6, 7, GAME_ZIP64.rgb(255, 255, 255))
        }
    }
    display.show()
}
function loadingscreen (amount: number) {
    for (let index = 0; index < amount; index++) {
        display.clear()
        display.setMatrixColor(2, 3, GAME_ZIP64.rgb(100, 100, 100))
        display.setMatrixColor(3, 2, GAME_ZIP64.rgb(200, 200, 200))
        display.setMatrixColor(4, 2, GAME_ZIP64.rgb(255, 255, 255))
        display.show()
        basic.pause(100)
        display.clear()
        display.setMatrixColor(4, 2, GAME_ZIP64.rgb(100, 100, 100))
        display.setMatrixColor(5, 3, GAME_ZIP64.rgb(200, 200, 200))
        display.setMatrixColor(5, 4, GAME_ZIP64.rgb(255, 255, 255))
        display.show()
        basic.pause(100)
        display.clear()
        display.setMatrixColor(5, 4, GAME_ZIP64.rgb(100, 100, 100))
        display.setMatrixColor(4, 5, GAME_ZIP64.rgb(200, 200, 200))
        display.setMatrixColor(3, 5, GAME_ZIP64.rgb(255, 255, 255))
        display.show()
        basic.pause(100)
        display.clear()
        display.setMatrixColor(3, 5, GAME_ZIP64.rgb(100, 100, 100))
        display.setMatrixColor(2, 4, GAME_ZIP64.rgb(200, 200, 200))
        display.setMatrixColor(2, 3, GAME_ZIP64.rgb(255, 255, 255))
        display.show()
        basic.pause(100)
    }
}
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    if (current_game == 2) {
        X += -1
        if (X < 1) {
            X = 1
        }
        if (X > 6) {
            X = 6
        }
    }
    if (current_game == 3) {
        X += -1
        if (X < 3) {
            X = 3
        }
        if (X > 4) {
            X = 4
        }
    }
})
function intro () {
    display.setBrightness(20)
    display.show()
    led.plot(2, 0)
    basic.pause(100)
    led.unplot(2, 0)
    led.plot(2, 1)
    basic.pause(100)
    led.unplot(2, 1)
    led.plot(2, 2)
    basic.pause(100)
    led.unplot(2, 2)
    led.plot(2, 3)
    basic.pause(100)
    led.unplot(2, 3)
    led.plot(2, 4)
    basic.pause(100)
    led.unplot(2, 4)
    display.setMatrixColor(3, 0, GAME_ZIP64.rgb(255, 0, 0))
    display.setMatrixColor(4, 0, GAME_ZIP64.rgb(255, 0, 0))
    display.show()
    basic.pause(100)
    display.setMatrixColor(3, 0, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(4, 0, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(3, 1, GAME_ZIP64.rgb(255, 50, 50))
    display.setMatrixColor(4, 1, GAME_ZIP64.rgb(255, 50, 50))
    display.show()
    basic.pause(100)
    display.setMatrixColor(3, 1, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(4, 1, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(3, 2, GAME_ZIP64.rgb(255, 100, 100))
    display.setMatrixColor(4, 2, GAME_ZIP64.rgb(255, 100, 100))
    display.show()
    basic.pause(100)
    display.setMatrixColor(3, 2, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(4, 2, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(3, 3, GAME_ZIP64.rgb(255, 150, 150))
    display.setMatrixColor(4, 3, GAME_ZIP64.rgb(255, 150, 150))
    display.show()
    basic.pause(100)
    display.setMatrixColor(3, 3, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(4, 3, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(3, 4, GAME_ZIP64.rgb(255, 180, 180))
    display.setMatrixColor(4, 4, GAME_ZIP64.rgb(255, 180, 180))
    display.show()
    basic.pause(100)
    display.setMatrixColor(3, 4, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(4, 4, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(2, 5, GAME_ZIP64.rgb(255, 220, 220))
    display.setMatrixColor(3, 5, GAME_ZIP64.rgb(255, 220, 220))
    display.setMatrixColor(4, 5, GAME_ZIP64.rgb(255, 220, 220))
    display.setMatrixColor(5, 5, GAME_ZIP64.rgb(255, 220, 220))
    display.show()
    basic.pause(100)
    display.setMatrixColor(2, 5, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(3, 5, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(4, 5, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(5, 5, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(2, 6, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(3, 6, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(4, 6, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(5, 6, GAME_ZIP64.rgb(255, 255, 255))
    display.show()
    basic.pause(100)
    display.setMatrixColor(2, 6, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(3, 6, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(4, 6, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(5, 6, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(1, 7, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(2, 7, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(3, 7, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(4, 7, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(5, 7, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(6, 7, GAME_ZIP64.rgb(255, 255, 255))
    display.show()
    basic.pause(100)
    display.setMatrixColor(1, 7, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(2, 7, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(3, 7, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(4, 7, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(5, 7, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(6, 7, GAME_ZIP64.rgb(0, 0, 0))
    display.show()
    basic.pause(500)
    botintro()
    basic.pause(100)
    gamemenu()
}
function defeat () {
    display.clear()
    display.showColor(GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
}
function se_volume () {
    loadingscreen(1)
    display.clear()
    showvolumeicon()
    display.show()
    while (!(GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1))) {
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Left)) {
            music.setVolume(music.volume() - 17)
            showvolumeicon()
            basic.pause(100)
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Right)) {
            music.setVolume(music.volume() + 17)
            showvolumeicon()
            basic.pause(100)
        }
        display.show()
    }
    loadingscreen(1)
}
function gamemenu () {
    gamechosen = 0
    current_game = 1
    gameselect = 0
    while (gamechosen == 0) {
        drawmenuicon()
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Right)) {
            gameselect += 1
            basic.pause(200)
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Left)) {
            gameselect += -1
            basic.pause(200)
        }
        if (gameselect < 0) {
            gameselect = 4
        }
        if (gameselect > 4) {
            gameselect = 0
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1) && gameselect == 0) {
            gamechosen = 1
            GAME_ZIP64.runMotor(25)
            display.clear()
            display.show()
            space_invaders()
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1) && gameselect == 1) {
            gamechosen = 1
            GAME_ZIP64.runMotor(25)
            display.clear()
            display.show()
            cargame()
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1) && gameselect == 2) {
            gamechosen = 1
            GAME_ZIP64.runMotor(25)
            display.clear()
            display.show()
            dinogame()
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1) && gameselect == 3) {
            gamechosen = 1
            GAME_ZIP64.runMotor(25)
            display.clear()
            display.show()
            settingsmenu()
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1) && gameselect == 3) {
            gamechosen = 1
            GAME_ZIP64.runMotor(25)
            display.clear()
            display.show()
        }
    }
}
function si_bg () {
    for (let index1 = 0; index1 <= 63; index1++) {
        display.setPixelColorAt(index1, GAME_ZIP64.rgb(20, 20, 100))
    }
}
function si_de () {
    if (enemy == 1) {
        if (bulletx == enemy_x && bullety == 0) {
            music.play(music.createSoundExpression(WaveShape.Noise, 264, 948, 255, 92, 200, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            GAME_ZIP64.runMotor(30)
            enemy = 0
            score += 1
            if (score > 59) {
                game_running = 0
            } else {
                showscore(score)
            }
        }
    }
    if (enemy == 0) {
        enemy_x = randint(1, 6)
        enemy = 1
        randomskin = randint(1, 4)
    }
    if (enemy == 1) {
        if (randomskin == 1) {
            display.setMatrixColor(enemy_x, 0, GAME_ZIP64.colors(ZipLedColors.Green))
        } else {
            if (randomskin == 2) {
                display.setMatrixColor(enemy_x, 0, GAME_ZIP64.colors(ZipLedColors.Orange))
            } else {
                if (randomskin == 3) {
                    display.setMatrixColor(enemy_x, 0, GAME_ZIP64.rgb(255, 0, 200))
                } else {
                    if (randomskin == 4) {
                        display.setMatrixColor(enemy_x, 0, GAME_ZIP64.rgb(48, 156, 166))
                    } else {
                        display.setMatrixColor(enemy_x, 0, GAME_ZIP64.colors(ZipLedColors.Green))
                    }
                }
            }
        }
        display.show()
    }
}
function cg_dp (x: number, y: number) {
    display.setMatrixColor(x, y, GAME_ZIP64.rgb(255, 0, 0))
    display.setMatrixColor(x, y + 1, GAME_ZIP64.rgb(255, 0, 0))
}
function cg_bg () {
    for (let index1 = 0; index1 <= 63; index1++) {
        display.setPixelColorAt(index1, GAME_ZIP64.rgb(10, 110, 10))
    }
    for (let index1 = 0; index1 <= 7; index1++) {
        display.setMatrixColor(2, index1, GAME_ZIP64.rgb(200, 200, 200))
        display.setMatrixColor(5, index1, GAME_ZIP64.rgb(200, 200, 200))
    }
    for (let index1 = 0; index1 <= 7; index1++) {
        display.setMatrixColor(3, index1, GAME_ZIP64.rgb(0, 0, 0))
        display.setMatrixColor(4, index1, GAME_ZIP64.rgb(0, 0, 0))
    }
    display.show()
}
function se_brightness () {
    loadingscreen(1)
    display.clear()
    display.show()
    while (!(GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1))) {
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Left)) {
            brightness += -5
            display.clear()
            display.setBrightness(brightness)
            display.showRainbow(1, 360)
            display.show()
            basic.pause(100)
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Right)) {
            brightness += 5
            display.clear()
            display.setBrightness(brightness)
            display.showRainbow(1, 360)
            display.show()
            basic.pause(100)
        }
        display.clear()
        display.setBrightness(brightness)
        display.showRainbow(1, 360)
        display.show()
    }
    loadingscreen(1)
}
function showscore (score: number) {
    if (score > 9) {
        showscorechar1 = parseFloat(convertToText(score).charAt(0))
    }
    if (score > 9) {
        showscorechar2 = parseFloat(convertToText(score).charAt(1))
    }
    if (score < 10) {
        showscorechar2 = parseFloat(convertToText(score).charAt(0))
    }
    if (showscorechar2 == 0) {
        images.createImage(`
            . . # # .
            . # . . #
            . # . . #
            . # . . #
            . . # # .
            `).showImage(0)
    } else {
        if (showscorechar2 == 1) {
            images.createImage(`
                . . . # .
                . . # # .
                . . . # .
                . . . # .
                . . # # #
                `).showImage(0)
        } else {
            if (showscorechar2 == 2) {
                images.createImage(`
                    . . # # .
                    . # . . #
                    . . . # .
                    . . # . .
                    . # # # #
                    `).showImage(0)
            } else {
                if (showscorechar2 == 3) {
                    images.createImage(`
                        . . # # .
                        . # . . #
                        . . . # .
                        . # . . #
                        . . # # .
                        `).showImage(0)
                } else {
                    if (showscorechar2 == 4) {
                        images.createImage(`
                            . . # # .
                            . # . # .
                            . # # # #
                            . . . # .
                            . . . # .
                            `).showImage(0)
                    } else {
                        if (showscorechar2 == 5) {
                            images.createImage(`
                                . # # # #
                                . # . . .
                                . # # # .
                                . . . . #
                                . # # # .
                                `).showImage(0)
                        } else {
                            if (showscorechar2 == 6) {
                                images.createImage(`
                                    . . # # .
                                    . # . . .
                                    . # # # .
                                    . # . . #
                                    . . # # .
                                    `).showImage(0)
                            } else {
                                if (showscorechar2 == 7) {
                                    images.createImage(`
                                        . # # # #
                                        . . . . #
                                        . . . # .
                                        . . # . .
                                        . . # . .
                                        `).showImage(0)
                                } else {
                                    if (showscorechar2 == 8) {
                                        images.createImage(`
                                            . . # # .
                                            . # . . #
                                            . . # # .
                                            . # . . #
                                            . . # # .
                                            `).showImage(0)
                                    } else {
                                        if (showscorechar2 == 9) {
                                            images.createImage(`
                                                . . # # .
                                                . # . . #
                                                . . # # #
                                                . . . . #
                                                . . # # .
                                                `).showImage(0)
                                        } else {
                                        	
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (showscorechar1 == 1) {
        led.plotBrightness(0, 0, 50)
    } else {
        if (showscorechar1 == 2) {
            led.plotBrightness(0, 0, 50)
            led.plotBrightness(0, 1, 50)
        } else {
            if (showscorechar1 == 3) {
                led.plotBrightness(0, 0, 50)
                led.plotBrightness(0, 1, 50)
                led.plotBrightness(0, 2, 50)
            } else {
                if (showscorechar1 == 4) {
                    led.plotBrightness(0, 0, 50)
                    led.plotBrightness(0, 1, 50)
                    led.plotBrightness(0, 2, 50)
                    led.plotBrightness(0, 3, 50)
                } else {
                    if (showscorechar1 == 5) {
                        led.plotBrightness(0, 0, 50)
                        led.plotBrightness(0, 1, 50)
                        led.plotBrightness(0, 2, 50)
                        led.plotBrightness(0, 3, 50)
                        led.plotBrightness(0, 4, 50)
                    }
                }
            }
        }
    }
}
function space_invaders () {
    loadingscreen(2)
    score = 0
    randomskin = 0
    current_game = 2
    cx = 3
    cx = randint(3, 4)
    cy = randint(1, 4)
    X = 1
    showscore(score)
    display.show()
    si_bg()
    game_running = 1
    while (game_running == 1) {
        display.clear()
        si_bg()
        si_dp(X, 7)
        si_db()
        si_de()
        basic.pause(25)
    }
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.InBackground)
    victory_icon()
    basic.showString("Game complete!, Score = 60!")
}
function dinogame () {
    while (true) {
        display.clear()
        for (let index1 = 0; index1 <= 39; index1++) {
            display.setPixelColorAt(index1, GAME_ZIP64.rgb(0, 150, 220))
        }
        for (let index1 = 0; index1 <= 7; index1++) {
            display.setPixelColorAt(index1 + 40, GAME_ZIP64.rgb(176, 94, 44))
        }
        for (let index1 = 0; index1 <= 15; index1++) {
            display.setPixelColorAt(index1 + 48, GAME_ZIP64.rgb(176, 94, 44))
        }
        display.setMatrixColor(0, 4, GAME_ZIP64.rgb(20, 220, 20))
        display.show()
    }
}
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    if (current_game == 2) {
        X += 1
        if (X < 1) {
            X = 1
        }
        if (X > 6) {
            X = 6
        }
    }
    if (current_game == 3) {
        X += 1
        if (X < 3) {
            X = 3
        }
        if (X > 4) {
            X = 4
        }
    }
})
function botintro () {
    display.clear()
    display.show()
    if (!(input.buttonIsPressed(Button.AB))) {
        basic.showString("BOT910")
        loadingscreen(4)
    }
    basic.pause(100)
    display.clear()
    display.show()
    basic.pause(100)
}
function boot () {
    display = GAME_ZIP64.createZIP64Display()
    music.setVolume(255)
    brightness = 25
    display.setBrightness(35)
    load()
}
function load () {
    game_running = 0
    display.showColor(GAME_ZIP64.colors(ZipLedColors.Black))
    display.show()
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    intro()
}
function cg_bge () {
    for (let index = 0; index <= cg_bgelist.length - 1; index++) {
        if (cg_bgelist[index + 0] == 7) {
            cg_bgelist[index + 0] = 0
        } else {
            cg_bgelist[index + 0] = cg_bgelist[index + 0] + 1
        }
        if (index == 1) {
            display.setMatrixColor(0, cg_bgelist[index + 0], GAME_ZIP64.rgb(10, 175, 10))
        }
        if (index == 2) {
            display.setMatrixColor(0, cg_bgelist[index + 0], GAME_ZIP64.rgb(0, 50, 0))
        }
        if (index == 3) {
            display.setMatrixColor(1, cg_bgelist[index + 0], GAME_ZIP64.rgb(10, 175, 10))
        }
        if (index == 4) {
            display.setMatrixColor(1, cg_bgelist[index + 0], GAME_ZIP64.rgb(0, 50, 0))
        }
        if (index == 5) {
            display.setMatrixColor(6, cg_bgelist[index + 0], GAME_ZIP64.rgb(10, 175, 10))
        }
        if (index == 6) {
            display.setMatrixColor(6, cg_bgelist[index + 0], GAME_ZIP64.rgb(0, 50, 0))
        }
        if (index == 7) {
            display.setMatrixColor(7, cg_bgelist[index + 0], GAME_ZIP64.rgb(10, 175, 10))
        }
        if (index == 8) {
            display.setMatrixColor(7, cg_bgelist[index + 0], GAME_ZIP64.rgb(0, 50, 0))
        }
        if (index == 10) {
            display.setMatrixColor(1, cg_bgelist[index + 0], GAME_ZIP64.rgb(0, 50, 0))
        }
        if (index == 11) {
            display.setMatrixColor(6, cg_bgelist[index + 0], GAME_ZIP64.rgb(0, 50, 0))
        }
    }
}
function cg_de () {
    if (enemy_y == 7) {
        enemy_x = randint(3, 4)
        randomskin = randint(1, 4)
        enemy_y = 0
    } else {
        if (enemy_x == X && (enemy_y == 4 || enemy_y == 5)) {
            game_running = 0
        } else {
            enemy_y += 1
        }
    }
    if (randomskin == 1) {
        display.setMatrixColor(enemy_x, enemy_y, GAME_ZIP64.colors(ZipLedColors.Orange))
        display.setMatrixColor(enemy_x, enemy_y + 1, GAME_ZIP64.colors(ZipLedColors.Orange))
    } else {
        if (randomskin == 2) {
            display.setMatrixColor(enemy_x, enemy_y, GAME_ZIP64.colors(ZipLedColors.Purple))
            display.setMatrixColor(enemy_x, enemy_y + 1, GAME_ZIP64.colors(ZipLedColors.Purple))
        } else {
            if (randomskin == 3) {
                display.setMatrixColor(enemy_x, enemy_y, GAME_ZIP64.colors(ZipLedColors.Blue))
                display.setMatrixColor(enemy_x, enemy_y + 1, GAME_ZIP64.colors(ZipLedColors.Blue))
            } else {
                if (randomskin == 4) {
                    display.setMatrixColor(enemy_x, enemy_y, GAME_ZIP64.colors(ZipLedColors.White))
                    display.setMatrixColor(enemy_x, enemy_y + 1, GAME_ZIP64.colors(ZipLedColors.White))
                } else {
                    display.setMatrixColor(enemy_x, enemy_y, GAME_ZIP64.colors(ZipLedColors.Blue))
                    display.setMatrixColor(enemy_x, enemy_y + 1, GAME_ZIP64.colors(ZipLedColors.Blue))
                }
            }
        }
    }
}
function victory_icon () {
    display.clear()
    display.setMatrixColor(2, 0, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(3, 0, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(4, 0, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(5, 0, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(0, 1, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(1, 1, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(2, 1, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(3, 1, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(4, 1, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(5, 1, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(6, 1, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(7, 1, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(0, 2, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(2, 2, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(3, 2, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(4, 2, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(5, 2, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(7, 2, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(0, 3, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(2, 3, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(3, 3, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(4, 3, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(5, 3, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(7, 3, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(1, 4, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(2, 4, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(3, 4, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(4, 4, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(5, 4, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(6, 4, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(2, 5, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(3, 5, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(4, 5, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(5, 5, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(3, 6, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(4, 6, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(2, 7, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(3, 7, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(4, 7, GAME_ZIP64.rgb(255, 215, 0))
    display.setMatrixColor(5, 7, GAME_ZIP64.rgb(255, 215, 0))
    display.show()
}
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire1, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    if (current_game == 2 && game_running == 1) {
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        bulletx = X
        bullety = 5
        GAME_ZIP64.runMotor(25)
    }
})
function si_dp (x: number, y: number) {
    display.setMatrixColor(x, y, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(x, y - 1, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(x - 1, y, GAME_ZIP64.rgb(0, 0, 0))
    display.setMatrixColor(x + 1, y, GAME_ZIP64.rgb(0, 0, 0))
    display.show()
    display.setMatrixColor(x, y, GAME_ZIP64.rgb(255, 0, 0))
    display.setMatrixColor(x, y - 1, GAME_ZIP64.rgb(255, 0, 0))
    display.setMatrixColor(x - 1, y, GAME_ZIP64.rgb(255, 0, 0))
    display.setMatrixColor(x + 1, y, GAME_ZIP64.rgb(255, 0, 0))
}
function cargame () {
    loadingscreen(2)
    score = 0
    randomskin = randint(1, 4)
    current_game = 3
    cg_bgelist = [
    randint(0, 7),
    randint(0, 7),
    randint(0, 7),
    randint(0, 7),
    randint(0, 7),
    randint(0, 7),
    randint(0, 7),
    randint(0, 7),
    randint(0, 0),
    randint(0, 0),
    randint(0, 0),
    randint(0, 0)
    ]
    X = 3
    cg_bg()
    showscore(score)
    enemy_y = 0
    enemy_x = randint(3, 4)
    game_running = 1
    while (game_running == 1) {
        cg_bg()
        cg_bge()
        cg_dc()
        cg_de()
        cg_dp(X, 5)
        display.show()
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Right)) {
            if (current_game == 3) {
                X += 1
            }
        }
        if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Left)) {
            if (current_game == 3) {
                X += -1
            }
        }
        if (X < 3) {
            X = 3
        }
        if (X > 4) {
            X = 4
        }
        basic.pause(200)
    }
    if (score > 59) {
        music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.InBackground)
        victory_icon()
        basic.showString("Game complete!, Score = 60!")
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
        defeat()
        basic.showString("Game over!, score =" + convertToText(score))
    }
}
let enemy_y = 0
let cg_bgelist: number[] = []
let showscorechar2 = 0
let showscorechar1 = 0
let brightness = 0
let randomskin = 0
let enemy_x = 0
let enemy = 0
let bulletx = 0
let bullety = 0
let gamechosen = 0
let settingselect = 0
let current_game = 0
let settingchosen = 0
let prevcy = 0
let game_running = 0
let score = 0
let cy = 0
let X = 0
let cx = 0
let gameselect = 0
let display: GAME_ZIP64.ZIP64Display = null
boot()
