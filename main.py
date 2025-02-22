def on_button_pressed_a():
    display.clear()
    display.show()
input.on_button_pressed(Button.A, on_button_pressed_a)

def drawplayer(x: number, y: number):
    display.set_matrix_color(x, y, GAME_ZIP64.rgb(72, 140, 75))
    display.set_matrix_color(x, y - 1, GAME_ZIP64.rgb(82, 150, 85))
    display.set_matrix_color(x - 1, y, GAME_ZIP64.rgb(82, 150, 85))
    display.set_matrix_color(x + 1, y, GAME_ZIP64.rgb(82, 150, 85))
    display.show()
def space_invaders():
    global current_game, x2
    current_game = 1
    x2 = 1
    display.set_brightness(10)
    display.show()
    display.show_color(GAME_ZIP64.rgb(68, 176, 186))
    drawplayer(x2, 7)
    current_game = 0

def my_function():
    if current_game == 1:
        GAME_ZIP64.run_motor(40)
GAME_ZIP64.on_button_press(GAME_ZIP64.ZIP64ButtonPins.FIRE1,
    GAME_ZIP64.ZIP64ButtonEvents.CLICK,
    my_function)

x2 = 0
current_game = 0
display: GAME_ZIP64.ZIP64Display = None
music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.soaring),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.soaring),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.soaring),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.soaring),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.soaring),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.soaring),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.soaring),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.soaring),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.soaring),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.builtin_playable_sound_effect(soundExpression.soaring),
    music.PlaybackMode.UNTIL_DONE)