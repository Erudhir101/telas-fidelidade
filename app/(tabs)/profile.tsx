import { MenuSection } from "@/components/profile/MenuSection";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { menuItems } from "@/constants/menuItems";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader
          name="Diego Rodrigues"
          phoneNumber="Adicionar telefone de acesso"
        />

        <View style={styles.menuContainer}>
          {menuItems.map((section, index) => (
            <MenuSection
              key={index}
              items={section}
              isSecureDeliverySection={index === 0}            
              />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch",
  },
  scrollView: {
    flex: 1,
  },
  menuContainer: {
    paddingBottom: 0,
  },
});
