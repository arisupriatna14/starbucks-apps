run-android:
	@react-native run-android

build-android:
	@cd android && ./gradlew clean && ./gradlew assembleRelease

run-iosx:
	@react-native run-ios --simulator="iPhone X"

run-ios6:
	@react-native run-ios --simulator="iPhone 6"