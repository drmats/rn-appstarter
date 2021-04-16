# android studio setup

Assuming linux with bash and gnome shell.

<br />




* download from https://developer.android.com/studio
* unpack to `~/.local/android-studio/`
* create shortcut `~/.local/share/applications/studio.desktop` (replace
    `USER_NAME` with your unix user):
    ```
    [Desktop Entry]
    Name=Android Studio
    GenericName=Android Studio
    Comment=App development
    Keywords=android, java, kotlin, jre
    Exec=/home/USER_NAME/.local/android-studio/bin/studio.sh %f
    Icon=/home/USER_NAME/.local/android-studio/bin/studio.svg
    Terminal=false
    Type=Application
    Categories=Development;
    ```
* run studio
* set Android SDK Location to `/home/USER_NAME/.local/android/sdk`
* install needed SDKs and AVDs
* append to `~/.bash_profile`:
    ```
    export PATH="$HOME/.local/android-studio/bin:$PATH"
    export ANDROID_HOME="$HOME/.local/android/sdk"
    export PATH="$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH"
    export JAVA_HOME="$HOME/.local/android-studio/jre"
    export PATH="$JAVA_HOME/bin:$PATH"
    ```
