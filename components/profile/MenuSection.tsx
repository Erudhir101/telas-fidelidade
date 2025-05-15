import { MenuItem } from '@/components/profile/MenuItem';
import { MenuItemType } from '@/types/menu';
import { StyleSheet, View } from 'react-native';

type MenuSectionProps = {
  items: MenuItemType[];
  isLast?: boolean;
  isSecureDeliverySection?: boolean;
};

export function MenuSection({ items, isLast = false, isSecureDeliverySection = false }: MenuSectionProps) {
  return (
    <View style={[styles.container, isLast && styles.lastSection]}>
      {items.map((item, index) => (
        <MenuItem 
          key={index} 
          item={item} 
          isSecureDelivery={isSecureDeliverySection}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  lastSection: {
    marginBottom: 0,
  },
});