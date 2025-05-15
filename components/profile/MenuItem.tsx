import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Badge } from "@/components/ui/Badge";
import { MenuItemType } from "@/types/menu";
import { Entypo } from "@expo/vector-icons";

type MenuItemProps = {
  item: MenuItemType;
};

export function MenuItem({ item }: MenuItemProps) {
  const { icon, title, subtitle, badge, badgeCount } = item;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.iconContainer}>{icon}</View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        <View style={styles.rightContainer}>
          {badge && <Badge type={badge} count={badgeCount} />}
          <Entypo
            name="chevron-right"
            size={20}
            color="#BCBCBC"
            style={styles.chevron}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  iconContainer: {
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 13,
    color: "#999999",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  chevron: {
    marginLeft: 8,
  },
});
