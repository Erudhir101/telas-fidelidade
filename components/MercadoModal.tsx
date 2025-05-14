import React, { useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import PhoneIllustration from "../assets/images/PhoneIllustration";
import { AntDesign } from "@expo/vector-icons";

interface MercadoPagoModalProps {
  visible: boolean;
  onClose: () => void;
}

const MercadoPagoModal: React.FC<MercadoPagoModalProps> = ({
  visible,
  onClose,
}) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const opacity = animatedValue;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[
            styles.modalContainer,
            {
              opacity,
              transform: [{ translateY }],
            },
          ]}
        >
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <AntDesign name="close" size={24} color="#000000" />
          </TouchableOpacity>

          <View style={styles.illustrationContainer}>
            <PhoneIllustration />
          </View>

          <View style={styles.benefitsContainer}>
            <Text style={styles.title}>
              Peça seu Cartão de Crédito Mercado Pago e aproveite essas
              vantagens exclusivas:
              <Text style={styles.emoji}>{"  "}🛒✨</Text>
            </Text>

            <View style={styles.benefitItem}>
              <Text style={styles.benefitText}>
                - Parcele suas compras em até
                <Text style={[styles.benefitText, { fontWeight: "bold" }]}>
                  {" "}
                  18x sem juros no Mercado Livre
                </Text>
              </Text>
            </View>

            <View style={styles.benefitItem}>
              <Text style={[styles.benefitText, { fontWeight: "bold" }]}>
                - Anuidade Grátis
              </Text>
            </View>

            <View style={styles.benefitItem}>
              <Text style={styles.benefitText}>
                <Text style={[styles.benefitText, { fontWeight: "bold" }]}>
                  - Segurança e Controle:
                </Text>{" "}
                acompanhe seus gastos pelo App, garantindo controle de todas
                suas transações.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.applyButton}
            activeOpacity={0.8}
            onPress={() => {
              // Handle application button press
              onClose();
            }}
          >
            <Text style={styles.applyButtonText}>Peça já</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 24,
    paddingTop: 16,
    alignItems: "stretch",
  },
  closeButton: {
    position: "absolute",
    right: 18,
    top: 18,
    zIndex: 1,
    padding: 4,
  },
  illustrationContainer: {
    height: 100,
    marginTop: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
    paddingHorizontal: 8,
  },
  emoji: {
    fontSize: 20,
  },
  benefitsContainer: {
    width: "100%",
    marginBottom: 96,
    paddingHorizontal: 9,
    gap: 20,
  },
  benefitItem: {
    flexDirection: "row",
    marginBottom: 12,
  },
  benefitText: {
    textAlign: "center",
    width: "100%",
    fontSize: 18,
    lineHeight: 20,
    color: "#4A4A4A",
  },
  applyButton: {
    backgroundColor: "#4285F4",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  applyButtonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
});

export default MercadoPagoModal;

// <SafeAreaView style={styles.centeredView}>
//   <Modal
//     animationType="fade"
//     transparent={false}
//     visible={modalVisible}
//     onRequestClose={() => {
//       Alert.alert("Modal has been closed.");
//       setModalVisible(!modalVisible);
//     }}
//   >
//     <View style={styles.centeredView}>
//       <View style={styles.modalView}>
//         <Pressable
//           style={styles.close}
//           onPress={() => setModalVisible(!modalVisible)}
//         >
//           <Text style={styles.textStyle}>
//             <AntDesign name="close" size={24} />
//           </Text>
//         </Pressable>
//         <View style={styles.illustrationContainer}>
//           <PhoneIllustration />
//         </View>
//         <View style={styles.modalText}>
//           <Text style={[styles.textStyle, { fontSize: 22 }]}>
//             Peça seu Cartão de Crédito Mercado Pago e aproveite essas
//             vantagens exclusivas:
//           </Text>
//           <Text
//             style={[
//               styles.textStyle,
//               { fontSize: 16, fontWeight: "normal" },
//             ]}
//           >
//             - Parcele suas compras em até
//             <Text
//               style={[
//                 styles.textStyle,
//                 { fontSize: 16, fontWeight: 900 },
//               ]}
//             >
//               {" "}
//               18x sem juros no Mercado Livre
//             </Text>
//           </Text>
//           <Text style={[styles.textStyle, { fontSize: 16 }]}>
//             - Anuidade Grátis
//           </Text>
//           <Text
//             style={[styles.textStyle, { fontSize: 16, fontWeight: 900 }]}
//           >
//             - Segurança e Controle:
//             <Text
//               style={[
//                 styles.textStyle,
//                 { fontSize: 16, fontWeight: "normal" },
//               ]}
//             >
//               {" "}
//               Acompanhe os seus gastos pelo App, garantindo o controle de
//               todas as suas transições
//             </Text>
//           </Text>
//         </View>
//         <Pressable
//           style={styles.buttonClose}
//           onPress={() => setModalVisible(!modalVisible)}
//         >
//           <Text style={[styles.textStyle, { color: "white" }]}>
//             Peça já
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   </Modal>
//   <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
//     <Text style={[styles.textStyle, styles.textPurple]}>
//       <FontAwesome name="diamond" size={14} color="#a137f4" />
//       R$ 50 em cupons
//       <Text style={styles.textStyle}> aqui</Text>
//     </Text>
//     <AntDesign name="right" size={14} color="black" />
//   </Pressable>
// </SafeAreaView>
