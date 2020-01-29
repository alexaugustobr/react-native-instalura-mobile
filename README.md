# Linux

## Running the emulator
Add your user to the kvm group
```
#Check if is not already on the group
ls -al /dev | grep kvm

#Adding the user to the kvm group
sudo adduser $USER kvm

#Changing the kvm folder access rights
sudo chown root:kvm /dev/kvm
sudo chmod ug+rwx /dev/kvm
```

## Running the Android emulator

```
#Listing the Android emulator images
emulator -list-avds

#Running the image
emulator -avd [image-name]

#Example
emulator -avd Nexus_5X_API_29_x86
```
## Running on device

```
#Find the device usb id
lsusb

#Allow the device to be attached 
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="22b8", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules

```

## Running react-native
```
#With the emulator opened or the device connected
npx react-native run-android
react-native start
```







