# react-native basics

Assuming [android studio](./android-studio-setup.md) and [nodejs](./nodejs-setup.md).

<br />




* create fresh application:
    ```
    npx react-native init RnStarter --template react-native-template-typescript
    ```

* run application in development mode (android)
    - run metro server (and leave it running):
        ```
        yarn start
        ```
    - check available devices:
        ```
        adb devices
        ```
    - run bundler:
        ```
        yarn run android
        ```

* build and deploy release version (android)
    - first, uninstall app from the target device
    - then run:
        ```
        cd RnStarter/android
        ./gradlew clean
        ./gradlew installRelease
        ```
