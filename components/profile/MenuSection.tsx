import { View, StyleSheet } from "react-native";
import { MenuItem } from "@/components/profile/MenuItem";
import { MenuItemType } from "@/types/menu";

type MenuSectionProps = {
  items: MenuItemType[];
  isFirst?: boolean;
};

export function MenuSection({ items, isFirst = false }: MenuSectionProps) {
  return (
    <View style={[styles.container, isFirst && styles.firstItem]}>
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  firstItem: {
    backgroundColor: "#cacaca",
  },
});
