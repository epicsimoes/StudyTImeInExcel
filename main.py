from pynput import keyboard
import time

time_counter = 0.0
stopProgram = False


def check_for_end(key):
    global time_counter, stopProgram
    if key == keyboard.Key.ctrl_r:  # if the right ctrl key is pressed then the loop will break
        stopProgram = True


def main():
    global time_counter, stopProgram

    # start the event listener in a new thread
    listener = keyboard.Listener(on_press=check_for_end, on_release=None)
    listener.start()

    while stopProgram is False:
        time.sleep(1)
        time_counter += 1.0  # adds 1 to the time counter every second
        print(time_counter)


if __name__ == '__main__':
    main()
