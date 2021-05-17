## app creation & setup issues

`ns create hunterfit --ng`

These are needed for creating modules and components:
`npm i --save-dev @angular/cli`
`npm i --save-dev @nativescript/schematics`

You may need to run 'tns doctor' to make sure you have all the right packages.
`tns migrate`, `tns clean` and `tns setup` help too.
You may also need 
`npm i --save-dev @nativescript/ios` 
`npm i --save-dev @nativescript/android` 
`npm install tns-core-modules@latest --save`
`npm install --save-dev @ngtools/webpack`
as well.

If on OS, you may need to preface the npm commands with "sudo" and end it with `--legacy-peer-deps`
(ex: `sudo npm --save-dev @nativescript/ios --legacy-peer-deps` )

To check your npm issues, try `npm audit` but BEWARE of `npm audit fix` ! 
It may fix something that you don't want fixed!

## Running the app

If using Android emulator, open the emulator before running
If using iOS, the emulator will open on its own at runtime
`tns run` 

If you have never run the app before, be sure to do `tns build android` or tns build ios`
Run the emulator with `tns run android`,`tns run android --bundle` or `tns run android --emulator`

## iOS issues

If using Cocoapods, do: `pod repo update` 

Note: To make sure all the Cocoapods are up-to-date, you may need to run the command once, close it, 
then run it again if itdoesn't seem to finish downloading

If `tns doctor` or `ns doctor ios` says your java is out of date for whatever reason, try:
`/usr/libexec/java_home -V` to check your version, then 
`export JAVA_HOME=/usr/libexec/java_home -v 1.8.0_251` to change your version to 1.8

If the XCode build step is complaining about a duplicate file, you may need to remove the platform folder.
Try `tns platform remove ios` then `tns platform add ios` and build the project again.
You may wanna clean it up with `tns clean` and try again too. 

(OS only) Don't forget to check your brew!
`brew doctor`

If you ever run 

## Creating new components

Note: If the component requires a module,The module must be created BEFORE the component!
Otherwise, do NOT make a module!
`ng g m moduleName` or `ng generate module moduleName`
`ng g c componentName` or `ng generate component componentName` 
`ng g c moduleName/componentName` or `ng generate component moduleName/componentName` 

IF running into issues, check that your global and local angular cli versions are the same.
You can check using `ng --version`
If the global version is higher than the local version, go to your global area and do this:

`npm uninstall -g @angular/cli`
`npm cache verify`
`npm install -g @angular/cli@11.0.7` (or whatever the correct version should be)

Then go back to your project, re-input the `--save-dev` commands from above. 


## GPS Emulator

It is recommended using the Android GPS Emulator: `https://github.com/dpdearing/android-gps-emulator`  
`https://code.tutsplus.com/tutorials/code-a-real-time-nativescript-app-geolocation-and-google-maps--cms-29001` has tips on this as well

The command to run the executable war file is: `java -jar android-gps-emulator-0.3.war` which can be accessed at http://localhost:8080/gpsemulator/
You can also run `java -jar android-gps-emulator-0.2.war 8081` to run at a different port (in this case, port 8081)
