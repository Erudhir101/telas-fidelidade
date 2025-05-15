import { View, Text, StyleSheet } from "react-native";

type BadgeProps = {
  type: "new" | "count" | "alert";
  count?: number;
};

export function Badge({ type, count }: BadgeProps) {
  if (type === "new") {
    return (
      <View style={[styles.badge, styles.newBadge]}>
        <Text style={styles.newText}>NOVO</Text>
      </View>
    );
  }

  if (type === "count" && count && count > 0) {
    return (
      <View style={[styles.badge, styles.countBadge]}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    );
  }

  if (type === "alert") {
    return (
      <View style={[styles.badge, styles.alertBadge]}>
        <Text style={styles.alertText}>{count || 1}</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  newBadge: {
    backgroundColor: "#E8053C",
  },
  newText: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  countBadge: {
    backgroundColor: "#E8053C",
    minWidth: 20,
    height: 20,
    borderRadius: 10,
  },
  countText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  alertBadge: {
    backgroundColor: "#FFCCCB",
    minWidth: 20,
    height: 20,
    borderRadius: 10,
  },
  alertText: {
    color: "#E8053C",
    fontSize: 12,
  },
});
