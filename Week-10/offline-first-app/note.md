### **How Does It Work?**

Here’s how the app works:

1. **Pull-to-Refresh:** When you pull down the list, the app fetches fresh data from the API and stores it in the cache using `AsyncStorage`.
2. **Clear Button:** This clears the content displayed on the screen but keeps the cached data intact.
3. **Reload Button:** This reloads the data stored in the cache, making it available offline.

With this, you can view data offline, refresh data when online, and maintain a seamless experience regardless of connectivity.

### **What is NetInfo, and Why Use It?**

`NetInfo` is a React Native library that allows you to detect and handle network connectivity changes in your app. With NetInfo, you can:

1. Detect whether the device is online or offline.
2. Show users a warning when they’re offline.
3. Decide whether to attempt a data fetch or fall back to cached data.
4. Provide a seamless offline experience with more context for the user.

You can integrate it to display a banner, conditionally fetch data, or even disable certain features when offline.
