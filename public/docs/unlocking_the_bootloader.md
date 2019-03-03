# Unlocking the Bootloader

## Warnings and Notices

- This guide is not exhaustive and you may run into issues while following the instructions. You have to _use your common sense_ and if you really need help, [join our Discord Server](https://discord.gg/pDWsFGY) and ask a question in the `#support` channel.

- We (anyone part of this project) are not responsible for ANY damage to yourself, the device or anything else. This includes your mental sanity which you may lose.

- This process should not be undertaken unless you recognise that your device may become bricked. I repeat: **do not do this if you are not prepared to be left with a \$75 WearOS Paperweight!**

## Method

Now you need to boot to the bootloader. This requires installing the [Android platform-tools (ADB, fastboot)](https://developer.android.com/studio/releases/platform-tools) on your computer. Linux users are recommended to install these tools from their appropriate package manager instead (search your repo for `fastboot`).

On Windows, you have two choices:

- Install to Windows Directory
- Put in easy-to-find folder

For the first option, just extract the tools to `C:\Windows`. From there, you should be able to access the tools in Command Prompt and PowerShell.

For the second option, create a folder somewhere. I personally have a folder called `C:\ADB` on my PC. Extract the tools into that folder. To use them, you need to open a command prompt window and type `cd /d C:\PATH\TO\FOLDER`. Then you can use them as normal.

**NOTICE:** If your computer can't find adb, something's wrong with your setup, and adb is probably not in your path. If you're a) on macOS, b) using the Linux extract package, or c) did not extract to your Windows directory, you need to be in the directory of adb. use `cd` followed by the path to that directory. macOS and Linux users using the extract package also need to use `chmod +x *` to give the binaries executable permissions, annd call adb using `./adb`. This also goes for `fastboot`.

### The Software Way

In Settings, go to System > About and tap Build Number 7 times to unlock Developer Options. Swipe back and go into this new menu, then enable ADB debugging. You can now connect your computer either over cable or WiFi. A WiFi connection is recommended. Enable ADB over WiFi. In your CMD or terminal, type `adb connect` followed by the IP address listed on your watch under ADB over WiFi. If you are using a wired connection, this step can be skipped.

Once you are connected, run `adb reboot bootloader` to enter the bootloader.

### The Hardware Way

Turn off your watch. Hold the power button. When the Wear24 logo appears, begin swiping from the top-left corner of the screen to the bottom-right, multiple times. If you succeeded, you should arrive at the bootloader screen. If the watch boots up as normal, just try again.

### Actually Unlocking the Bootloader

Connect the pinout cable to your watch and computer, then run `fastboot oem unlock`. You do not need to have your watch constantly connected when running commands in `fastboot`; if no devices are connected, it will wait for you to connect one before running the command. Read the instructions on the phone/computer to make sure your bootloader is unlocked. There should be some new text on the bootloader menu that says you are unlocked.

## Next Steps

[Flashing TWRP Recovery](/wiki/Flashing_TWRP_Recovery)
