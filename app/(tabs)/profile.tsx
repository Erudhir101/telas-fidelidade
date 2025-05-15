import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { MenuSection } from "@/components/profile/MenuSection";
import { menuItems } from "@/constants/menuItems";

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
              isLast={index === menuItems.length - 1}
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
    backgroundColor: "#cacaca",
  },
  scrollView: {
    flex: 1,
  },
  menuContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});
