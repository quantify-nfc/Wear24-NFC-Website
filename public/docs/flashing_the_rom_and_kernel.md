# Flashing the ROM and Kernel

## Warnings and Notices

- This guide is not exhaustive and you may run into issues while following the instructions. You have to _use your common sense_ and if you really need help, [join our Discord Server](https://discord.gg/pDWsFGY) and ask a question in the `#support` channel.

- We (anyone part of this project) are not responsible for ANY damage to yourself, the device or anything else. This includes your mental sanity which you may lose.

- This process should not be undertaken unless you recognise that your device may become bricked. I repeat: **do not do this if you are not prepared to be left with a \$75 WearOS Paperweight!**

## Method

This is the last stretch!

You'll need to download the ROM and Kernel package from [the Downloads page](/downloads#rom). (Read on before downloading!) Note that **the ROM package includes the kernel image unless stated otherwise**. The file is around 250 MB and will take around 1-3 minutes to download on average internet speed.

When the download is complete, you'll need to transfer the file to your watch. There are two different ways of doing this.

### Method 1: NavExplorer (Wireless)

This method involves installing an Android app called [Nav Explorer](https://play.google.com/store/apps/details?id=com.turndapage.navexplorer) onto your phone and watch from the Google Play Store. It is easiest (in my opinion) to do this via the Play Store on the web but will only work if you can boot successfully. This app allows you to transfer a file from your phone to your watch without leaving Android. **If you wish to use this method, you'll need to download the ROM Package onto your phone and NOT your PC.** When it's done, just transfer the ROM ZIP over to the watch. Easy!

If you want to download the ROM, scan the QR code below, or go to `wear24rom.com/download`.

![ROM QR Code](/docs/rom-download-qr-code.svg)

### Method 2: adb push/TWRP (Wired)

For `adb push` it's just like every other time so far: `adb push path/to/zip /sdcard`.

The other option is MTP inside of TWRP. This can be easier as it stops you from having to use a command line but it can get annoying fumbling through directories while trying to hold some metal pins on some small contact points. Drag the ROM ZIP into `/sdcard`

Your choice.

## The Flash (not the TV Show)

---

<span style="color:red">CAUTION!</span>
Before flashing ANYTHING, make sure you have a backup. If you don't and something goes wrong, you're fucked.

---

To flash the ROM and Kernel, just boot into TWRP and go to `Install > ZIP` then select the ROM ZIP you transfered to the watch (should be in `/sdcard` if you followed instructions above).

Swipe to flash and **follow the prompts carefully**.

You will be asked if you want to install the Kernel and if you want to install the Verizon Apps (Verizon Messages, Charging App, etc.).

If you leave it, it means Yes. If you press the power button it means No. **Make sure to not press the power button while it's asking if you want to install the kernel.** You can install it separately, but it's just extra effort.

---

<span style="color:blue">INFO</span>
If you do need to install the Kernel separately, boot into TWRP and go to `Install > Image`, select the image file, select boot then swipe to flash.

---

## Finished!

You're done! _ta-da sound effect_

Make sure to [join our Discord server](https://discord.gg/m2v6fQH).

If you have any questions, hop into the Discord and send us a message in the `#support` channel. You can also [message Jared on Telegram](https://t.me/BarkIAmDoggo).

## Next Steps?

There aren't any.

[Home page](/)
