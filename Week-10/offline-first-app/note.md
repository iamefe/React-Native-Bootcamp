### **How Does It Work?**

Here’s how the app works:

1. **Pull-to-Refresh:** When you pull down the list, the app fetches fresh data from the API and stores it in the cache using `AsyncStorage`.
2. **Clear Button:** This clears the content displayed on the screen but keeps the cached data intact.
3. **Reload Button:** This reloads the data stored in the cache, making it available offline.

With this, you can view data offline, refresh data when online, and maintain a seamless experience regardless of connectivity.
