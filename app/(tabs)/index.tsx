import { Image } from "expo-image";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  Platform,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useState } from "react";
import MercadoPagoModal from "@/components/MercadoModal";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Metade Cenoura com Cobertura",
    price: 30.0,
    image: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg",
  },
  {
    id: "2",
    name: "Bolo Cenoura com cobertura",
    price: 52.0,
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg",
  },
  {
    id: "3",
    name: "Bolo de Formigueiro",
    price: 36.0,
    image: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg",
  },
  {
    id: "4",
    name: "Metade Milho",
    price: 23.0,
    image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg",
  },
  {
    id: "5",
    name: "Bolo de Milho",
    price: 38.0,
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
  },
  {
    id: "6",
    name: "Romeu e Julieta",
    price: 48.0,
    image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
  },
];

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.card}>
        <Image
          source={require("@/assets/images/avatarBolo.jpg")}
          style={styles.cardAvatar}
        />

        <TouchableOpacity style={styles.cardButton}>
          <View style={{}}>
            <Text style={styles.cardTitle}>Bolos do Flávio - Águas Claras</Text>
            <Text style={styles.cardSubtitle}>
              Entrega rastreável - 1,0 km . Min R$ 20,00
            </Text>
          </View>
          <AntDesign name="right" size={14} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              <AntDesign name="star" size={14} color="black" /> 4,9
            </Text>
            <Text style={styles.cardSubtitle}>(1.1 mil avaliações)</Text>
            <MaterialIcons name="stars" size={16} color="#a3a3a3" />
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Nível 4</Text>
            <Text style={styles.cardSubtitle}> de 5</Text>
          </View>
          <AntDesign name="right" size={14} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
            <Text style={styles.cardTitle}>Entrega</Text>
            <AntDesign name="right" size={14} color="#a3a3a3" />
            <Text style={styles.cardSubtitle}>Hoje, 35-45 min</Text>
            <Text style={{ fontWeight: "bold", color: "#17C10B" }}>Grátis</Text>
          </View>
          <AntDesign name="right" size={14} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Destaques</Text>
        <View style={styles.productsGrid}>
          {products.map((product) => (
            <TouchableOpacity key={product.id} style={styles.productCard}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productPrice}>
                  R$ {product.price.toFixed(2)}
                </Text>
                <Text style={styles.productName}>{product.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <SafeAreaView style={styles.centeredView}>
        <TouchableOpacity
          style={[styles.buttonModal, styles.shadowContainer]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={[styles.textStyle, styles.textPurple]}>
            <FontAwesome name="diamond" size={14} color="#a137f4" /> R$ 50 em
            cupons
            <Text style={styles.textStyle}> aqui</Text>
          </Text>
          <AntDesign name="right" size={14} color="black" />
        </TouchableOpacity>
        <MercadoPagoModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </SafeAreaView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    zIndex: 100,
    flex: 1,
    marginBottom: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#c2c2c2",
    borderStyle: "solid",
    paddingTop: 32,
    position: "relative",
  },
  cardAvatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
    top: -35,
    alignSelf: "center",
    position: "absolute",
  },
  cardButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    elevation: 2,
    borderRadius: 16,
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        // Remove iOS shadow
        shadowOpacity: 0,
      },
      android: {
        // Remove Android shadow
        elevation: 0,
      },
    }),
  },
  cardTitle: { fontSize: 18, fontWeight: 600 },
  cardSubtitle: { fontSize: 14, fontWeight: 500, opacity: 0.35 },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  productCard: {
    width: "50%",
    padding: 8,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 22,
    marginBottom: 8,
  },
  productInfo: {
    padding: 8,
  },
  productName: {
    fontSize: 14,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  centeredView: {
    width: "100%",
    height: "100%",
    alignItems: "stretch",
    flex: 1,
  },
  buttonModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: "white",
    shadowColor: "black",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  textPurple: {
    color: "#a137f4",
  },
  modalText: {
    gap: 8,
    marginBottom: 15,
    textAlign: "center",
  },
  close: {
    position: "absolute",
    right: 10,
    top: 10,
    fontWeight: "bold",
  },
  illustrationContainer: {
    height: 180,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowContainer: {
    backgroundColor: "#fff", // Background color is necessary for Android shadow

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 3, // Adjust this value to control shadow depth
      },
    }),
  },
});
