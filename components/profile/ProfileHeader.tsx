import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

type ProfileHeaderProps = {
  name: string;
  phoneNumber: string;
};

export function ProfileHeader({ name, phoneNumber }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{name.charAt(0)}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity style={styles.phoneContainer}>
          <FontAwesome name="phone" size={18} color="#E8053C" />
          <Text style={styles.phoneText}>{phoneNumber}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 12,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 8,
    borderBottomColor: "#F5F5F5",
  },
  avatarContainer: {
    marginBottom: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E8053C",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  name: {
    fontSize: 18,
    marginBottom: 8,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  phoneText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#E8053C",
    fontWeight: "bold",
  },
});
