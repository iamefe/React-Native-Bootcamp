import { FIREBASE_DB } from "@/config/FirebaseConfig";
import { useAuth } from "@/context/AuthContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import {
  addDoc,
  collection,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native";

interface Group {
  id: string;
  name: string;
  description: string;
}

const TabsIndex = () => {
  const { user, initialized } = useAuth();
  const [groups, setGroups] = useState<Group[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (initialized) {
      if (!user) {
        router.replace("/(auth)/login");
      }
    }
  }, [user, initialized, router]);

  useEffect(() => {
    const ref = collection(FIREBASE_DB, "groups");
    const unsubscribe = onSnapshot(ref, (snapshot: DocumentData) => {
      const groupsData = snapshot.docs.map((doc: DocumentData) => ({
        id: doc.id,
        ...doc.data(),
      })) as Group[];
      setGroups(groupsData);
    });
    return unsubscribe;
  }, []);

  //function to start a new group
  const startGroup = async () => {
    try {
      if (user) {
        await addDoc(collection(FIREBASE_DB, "groups"), {
          name: `Group #${Math.floor(Math.random() * 1000)}`,
          description: "This is a chat group",
          creator: user.uid,
        });
      } else {
        console.log("User is not authenticated");
      }
    } catch (error) {
      console.log("Error Creating user", error);
    }
  };

  if (!initialized) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {groups.map((group) => (
          <Link key={group.id} href={`/groups/${group.id}`} asChild>
            <TouchableOpacity style={styles.groupCard}>
              <Text style={styles.groupName}>{group.name}</Text>
              <Text>{group.description}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>

      <Pressable style={styles.fab} onPress={startGroup}>
        <Ionicons name="add" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f4f4f4",
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#03A9F4",
    borderRadius: 30,
    elevation: 8,
  },
  groupCard: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },

  groupName: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default TabsIndex;
