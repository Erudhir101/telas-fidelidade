import { Badge } from '@/components/ui/Badge';
import { MenuItemType } from '@/types/menu';
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MenuItemProps = {
  item: MenuItemType;
  isSecureDelivery?: boolean;
};

export function MenuItem({ item, isSecureDelivery }: MenuItemProps) {
  const { icon, title, subtitle, badge, badgeCount } = item;
  
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        isSecureDelivery && styles.secureDeliveryContainer
      ]} 
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {icon}
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        
        <View style={styles.rightContainer}>
          {badge && (
            <Badge type={badge} count={badgeCount} />
          )}
          <Entypo
            name="chevron-right"
            size={20}
            color="#BCBCBC"
            style={styles.chevron} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: "#F5F5F5",
    borderWidth: 1,
  },
  secureDeliveryContainer: {
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    marginBottom: 10,
    marginHorizontal: 8,
    padding: 8,
    fontWeight: 'black',
  },
  iconContainer: {
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
  },
  subtitle: {
    color: '#999999',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevron: {
    marginLeft: 8,
  },
});