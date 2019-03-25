# Flashing TWRP

## Warnings and Notices

- This guide is not exhaustive and you may run into issues while following the instructions. You have to _use your common sense_ and if you really need help, [join our Discord Server](https://discord.gg/pDWsFGY) and ask a question in the `#support` channel.

- We (anyone part of this project) are not responsible for ANY damage to yourself, the device or anything else. This includes your mental sanity which you may lose.

- This process should not be undertaken unless you recognise that your device may become bricked. I repeat: **do not do this if you are not prepared to be left with a \$75 WearOS paperweight!**

## Method

---

<span style="color:red">CAUTION!</span>
**This is where stuff can go downhill.** If you flash this differently or miss a step you can, and most likely will, brick your device. **YOU DO NOT WANT A \$75 PAPERWEIGHT!**

---

First, [download TWRP for dorado](https://twrp.me/quanta/verizonwear24.html). Shout-out to [mkorenko](https://github.com/mkorenko) who put a lot of work into this device!

Now you need to run `fastboot boot path/to/image` where `path/to/image` is, well, the path to the TWRP image file on your local PC. Connect your watch. If it fails, your connection was bad. Try again.

Once in TWRP, swipe to allow modifications if it prompts you to do so. Transfer the image to your device using `adb push path/to/image /sdcard`. Note that we're using ADB: **your device must be connected (wired) when running this command**. Also note you may have to run `adb kill-server` before this to ensure it won't try to flash to your wireless ADB device which no longer exists.

Now go to `Install > Install Image`, select the TWRP image and, when prompted, choose the Recovery partition. Swipe to install. When it asks about the TWRP app, uncheck all boxes and tap `Do Not Install`. Go Home, go to the Power menu and Reboot Bootloader. Press the power button until you see `Recovery Mode`, then long press the power button to select it.

"**But Jared!**", I hear you cry, "**Why wouldn't you just use** `fastboot flash recovery`??", to which I reply that's a great question. I remember reading something weird about this device and the way it handles custom recoveries. Furthermore, when flashing my second Wear24 without booting TWRP first, I ran into a hard brick. The device refused to boot to the system or TWRP, and no amount of flashing fixed it. I don't know why this happened, but let's try not to let it happen to you.

**I will again reiterate that we are not responsible for your device.**

Now, you should be inside the installed TWRP recovery. Yay!

## Test Points

See the table below to see what pins connects to what test point. This will also be on the next page.

| USB Pin | Test Point |
| ------- | ---------- |
| 5V      | TP1        |
| Data +  | TP2        |
| Data -  | TP3        |
| Ground  | TP4        |

## Next Steps

[Making a TWRP Backup](/wiki/Making_a_TWRP_Backup)
