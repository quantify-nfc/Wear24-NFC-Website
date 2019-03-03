# Wear24 Modification: The Full Guide

_*Follow this guide at your own risk. We are not responsible for your mistakes. This guide must be accompanied by common sense if you wish to stay sane.*_

## Opening the Watch

Opening the Wear24 is necessary for any low-level changes to the system. Verizon's dock does not support data transfer, rather, the USB pins are located on a board inside the watch.

**Please be aware that opening the watch will defeat the IP67 wear resistance rating. This can likely be re-obtained by using a sealant. Community members have used Flex Seal, but neither Jared nor davwheat have.**

In order to open the Wear24, you will need a small tri-wing screwdriver (0.6), metal/plastic pry tools, and a hot hair dryer or heat gun. We also recommend suction cups and other phone disassembly kits.

Turn the Wear24 off from Settings > System > Power Off. Once the watch is off, you can flip it over. We recommend removing the straps to avoid damage, but this is optional. The straps are held in by two screws for each band. The pins for the antennas will be exposed when you remove the bands. Do not bend these pins or lose the elastics. You may replace these bands with 20mm quick release bands, but note that this leaves the antenna ports exposed. If you plan to keep IP67, you'll need to seal these.

Remove the four tri-wing screws from the back of the watch. These will have adhesive on them. A pair of tweezers may help remove them from the casing. Heat the back so that it is too hot to touch, but beware of warping or melting the plastic. If you do damage the back cover, it is only cosmetic, so don't feel bad. It's very likely that you will damage it. Once the back is heated, Attempt to pry from the top-right corner or right edge, below the lip. This requires patience and may require more than one pry tool at a time. You may also find success using a small, sharp tool to stab into the side of the back. A cellphone screen suction tool may prove very useful.

**CAUTION!** When inserting a pry tool below the cover, be cautious, It is possible to slip it underneath the SIM board and damage that board's conector. Only lift the back cover.

Once the back cover is off, you're in. Peel back the wireless charging coil and let it hang outside the casing, out of the way. Remove the black sponge found on the SIM board to expose the contacts. If you are not a Verizon customer, it's recommended to remove the SIM card by sliding it up past where the sponge was. If you have no reason to, do not disassemble further.

## Creating a Pinout Cable

**As of now, Jared is selling pinout cables for CAD \$5 plus shipping. If you don't want to do this, contact him to buy a cable.**

Use a USB cable that is capable of data transfer. Flat wire cables are not recommended as they usually use thin uncoated wire which is much more difficult to work with. Older Type-B or Micro-B cables work well.

Cut off the end of the USB cable that is not the 'A' connector (one that connects to your PC) using a pair of wire cutters. Strip this end of the wire of its outer coating using a box cutter knife or a set of wire strippers. You should find red, white, green and black wires inside. Strip these too.

If your wires are flexible/made of multiple very thin wires wound together, it's recommended to use some sturdy wire (solid core) to reinforce them. Wrap the flexible wire around the new wire and seal the two using heat shrink tubing. You could solder these if you have the correct equipment, too.

Use adhesive to put these wires together in the order of RWGB (5V, Data+, Data-, GND). Electrical tape is recommended so you can realign the cables to line up with the pinouts if need be. Afterwards, you can coat the tape and wires in hot glue if you so desire.

## Unlocking the Bootloader

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

## Flashing TWRP

[Download TWRP for dorado](https://twrp.me/quanta/verizonwear24.html) (shoutout to mkorenko, who put a lot of work into this device!). Run `fastboot boot` followed by the path to the TWRP image file. Connect your watch. If it fails, your connection was bad, try again.

Once in TWRP, swipe to allow modifications if it prompts you to do so. Transfer the image to your device using `adb push path/to/image /sdcard`. Note that we're using ADB: **your device must be connected when running this command**. Go to Install > Image, select the TWRP image, and swipe. Then go home, go to the Power menu and Reboot Bootloader. Press the power button until you come to Recovery Mode, then long press the power button.

"**But Jared!**", I hear you cry, "**Why wouldn't you just use** `fastboot flash recovery`??", to which I reply that's a great question. I remember reading something weird about this device and the way it handles custom recoveries. Furthermore, when flashing my second Wear24 without booting TWRP first, I ran into a hard brick. The device refused to boot to the system or TWRP, and no amount of flashing fixed it. I don't know why this happened, but let's try not to let it happen to you.

**I will again reiterate that we are not responsible for your device.**

Now, you should be inside the installed TWRP recovery.

## Making a Backup

This part can be a pain for multiple reasons, but it can save your watch. Do it. Go to Backup and check System and Boot. This will take up a little under a GB of your watch's internal storage. If you're not comfortble with that, you can transfer it to your phone using NavExplorer, then upload it to a computer or cloud storage. Just know that if you ever need to use this backup, it must be on your watch. If it's not, you will have to hold your hand very steady on the contacts for a _long_ time while the data transfers (or you can solder).

## Transferring Files to Your Watch

If you are able to boot, it is recommended to use NavExplorer. Download this app onto your phone and watch. Download the file you want to your phone, then use NavExplorer to transfer it. The app is self explanatory. If you don't want to use NavExplorer, you can `adb push` over WiFi.

If you cannot boot, you need to use either wired `adb push` or MTP inside TWRP.

## Flashing a ROM ZIP

TAKE A BACKUP. Then go to Install > ZIP and select the zip file. Swipe to flash and read the prompts carefully.

## Flashing a Boot Image

You may never need to do this, but if you do, go to Install > Image, select the image file, select boot, then swipe.

### Questions?

Join our Discord server and tag JaredTamana, MrJeeves/davwheat, or someone with the `ROM User` role. You can also [message Jared on Telegram](https://t.me/BarkIAmDoggo).
