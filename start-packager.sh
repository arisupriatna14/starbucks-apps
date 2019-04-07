#!/usr/bin/env bash
# Script opens packager in a new window
osascript -e '
set myPath to (do shell script "pwd")
tell application "Terminal"
    activate
    tell application "System Events" to keystroke "n" using command down
    repeat while contents of selected tab of window 1 starts with linefeed
        delay 0.01
    end repeat
    do script ("cd " & quoted form of myPath) in window 1
    do script "react-native start --reset-cache" in window 1
end tell'