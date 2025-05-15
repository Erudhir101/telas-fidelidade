import { MenuItemType } from "@/types/menu";
import { Entypo, Feather } from "@expo/vector-icons";

// Define colors
const COLORS = {
  primary: "#E8053C",
  secondary: "#333333",
};

const SIZE = 24;

// Menu items grouped by sections
export const menuItems: MenuItemType[][] = [
  [
    {
      icon: <Entypo name="shopping-bag" size={SIZE} color={COLORS.secondary} />,
      title: "Entrega mais segura!",
      subtitle: "Agora é só pré verificar o código de entrega. Vem ver!",
      badge: "new",
    },
  ],
  [
    {
      icon: (
        <Feather name="message-circle" size={SIZE} color={COLORS.secondary} />
      ),
      title: "Conversas",
      subtitle: "Meu histórico de conversas",
      badge: "count",
      badgeCount: 2,
    },
    {
      icon: <Feather name="bell" size={SIZE} color={COLORS.secondary} />,
      title: "Notificações",
      subtitle: "Minha central de notificações",
      badge: "count",
      badgeCount: 3,
    },
    {
      icon: <Feather name="user" size={SIZE} color={COLORS.secondary} />,
      title: "Dados da conta",
      subtitle: "Minhas informações da conta",
      badge: "alert",
      badgeCount: 1,
    },
    {
      icon: <Feather name="credit-card" size={SIZE} color={COLORS.secondary} />,
      title: "Pagamentos",
      subtitle: "Meus saldos e cartões",
      badge: "new",
    },
  ],
  [
    {
      icon: <Feather name="gift" size={SIZE} color={COLORS.secondary} />,
      title: "Clube iFood",
      subtitle: "Meus benefícios exclusivos",
    },
    {
      icon: <Entypo name="ticket" size={SIZE} color={COLORS.secondary} />,
      title: "Cupons",
      subtitle: "Meus cupons de desconto",
    },
    {
      icon: <Feather name="users" size={SIZE} color={COLORS.secondary} />,
      title: "Comunidade iFood",
      subtitle: "Junte-se a nós",
      badge: "new",
    },
    {
      icon: <Feather name="map-pin" size={SIZE} color={COLORS.secondary} />,
      title: "Código de entrega",
      subtitle: "Meus códigos de entrega",
      badge: "new",
    },
  ],
];
