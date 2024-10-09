import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import BottomNavigation from "./navigation/BottomNavigation";

interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  date: string;
}

interface StatusItem {
  id: string;
  avatar: string;
}

const chatData: ChatItem[] = [
  {
    id: "1",
    name: "Smith Matthew",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419146769/display_1500/stock-photo-an-adult-male-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-he-should-2419146769.jpg",
    lastMessage: "Hi David, Hope you're doing ...",
    date: "29 March",
  },
  {
    id: "2",
    name: "Merry An.",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419909229/display_1500/stock-photo-an-adult-female-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-front-on-2419909229.jpg",
    lastMessage: "Are you ready for today's part...",
    date: "12 mar",
  },
  {
    id: "3",
    name: "John Walton",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419909229/display_1500/stock-photo-an-adult-female-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-front-on-2419909229.jpg",
    lastMessage: "I am sending you a parcel rece...",
    date: "08 Feb",
  },
  {
    id: "4",
    name: "Monica Randawa",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419146769/display_1500/stock-photo-an-adult-male-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-he-should-2419146769.jpg",
    lastMessage: "Hope you're doing well today..",
    date: "02 Feb",
  },
  {
    id: "5",
    name: "Innoxent Jay",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419146769/display_1500/stock-photo-an-adult-male-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-he-should-2419146769.jpg",
    lastMessage: "Let's get back to the work, You..",
    date: "25 Jan",
  },
  {
    id: "6",
    name: "Harry Samit",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419146769/display_1500/stock-photo-an-adult-male-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-he-should-2419146769.jpg",
    lastMessage: "Listen david, i have a problem..",
    date: "18 Jan",
  },
  {
    id: "7",
    name: "Innoxent Jay",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419146769/display_1500/stock-photo-an-adult-male-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-he-should-2419146769.jpg",
    lastMessage: "Let's get back to the work, You..",
    date: "25 Jan",
  },
];

const statusData: StatusItem[] = [
  {
    id: "0",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419146769/display_1500/stock-photo-an-adult-male-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-he-should-2419146769.jpg",
  },
  {
    id: "1",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419909229/display_1500/stock-photo-an-adult-female-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-front-on-2419909229.jpg",
  },
  {
    id: "2",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419909229/display_1500/stock-photo-an-adult-female-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-front-on-2419909229.jpg",
  },
  {
    id: "3",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419909229/display_1500/stock-photo-an-adult-female-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-front-on-2419909229.jpg",
  },
  {
    id: "4",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419909229/display_1500/stock-photo-an-adult-female-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-front-on-2419909229.jpg",
  },
  {
    id: "5",
    avatar:
      "https://www.shutterstock.com/shutterstock/photos/2419909229/display_1500/stock-photo-an-adult-female-avatar-image-on-a-light-coloured-plain-background-for-use-on-a-chat-bot-front-on-2419909229.jpg",
  },
];

const ChatInterface = () => {
  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}> {item.lastMessage}</Text>
      </View>
      <Text style={styles.date}> {item.date}</Text>
    </TouchableOpacity>
  );

  const renderStatusItem = ({ item }: { item: StatusItem }) => (
    <TouchableOpacity style={styles.statusItem} key={item.id}>
      {item.id === "0" ? (
        <View style={styles.addStatusButton}>
          <Ionicons name="add" size={24} color="white" />
        </View>
      ) : (
        <Image source={{ uri: item.avatar }} style={styles.statusAvatar} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Link href="/">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
          <Text style={styles.headerTitle}>Chat</Text>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="gray" />
          <Text style={styles.searchText}> Search here ...</Text>
          <TouchableOpacity>
            <Ionicons name="mic-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.statusList}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {statusData.map((item) => renderStatusItem({ item }))}
        </ScrollView>

        <FlatList
          data={chatData}
          renderItem={renderChatItem}
          keyExtractor={(item) => item.id}
        />

        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 8,
    margin: 16,
  },
  searchText: {
    flex: 1,
    marginLeft: 8,
    color: "gray",
  },
  statusList: {
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 80,
  },
  statusItem: {
    marginRight: 16,
  },
  addStatusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  statusAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 14,
    color: "gray",
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
});

export default ChatInterface;
