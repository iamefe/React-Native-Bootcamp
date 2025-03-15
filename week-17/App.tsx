import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Purchases, { LOG_LEVEL, PurchasesPackage } from "react-native-purchases";
const APIKeys = {
  apple: "app_uBlDVTOWlIqnyaFaswhrQkiAUcE",
  google: "goog_uBlDVTOWlIqnyaFaswhrQkiAUcE",
};
export default function App() {
  const [packages, setPackages] = useState<PurchasesPackage[]>([]);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const init = async () => {
      if (Platform.OS === "android") {
        await Purchases.configure({ apiKey: APIKeys.google });
      } else {
        await Purchases.configure({ apiKey: APIKeys.apple });
      }
      setIsReady(true);
      // Use more logging during debug if want!
      Purchases.setLogLevel(LOG_LEVEL.DEBUG);

      // Listen for customer updates
      Purchases.addCustomerInfoUpdateListener(async (info) => {
        console.log("Customer info updated", info);
      });

      // Load all offerings and the user object with entitlements
      await loadOfferings();
    };
    init();
  }, []);

  // Load all offerings a user can (currently) purchase
  const loadOfferings = async () => {
    const offerings = await Purchases.getOfferings();
    console.log("Offerings", offerings);
    if (offerings.current) {
      setPackages(offerings.current.availablePackages);
    }
  };
  const purchasePackage = async (pack: PurchasesPackage) => {
    try {
      await Purchases.purchasePackage(pack);
    } catch (e: any) {
      if (!e.userCancelled) {
        alert(e);
      }
    }
  };
  const restorePermissions = async () => {
    const customer = await Purchases.restorePurchases();
    return customer;
  };
  if (!isReady) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {packages?.map((pack) => (
        <Text key={pack.identifier} onPress={() => purchasePackage(pack)}>
          {pack.product.title}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
