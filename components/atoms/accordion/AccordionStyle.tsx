import { Colors } from "@/theme/types";
import { StyleSheet } from "react-native";

export const createStyles = (colors: Colors, dark: boolean) =>
  StyleSheet.create({
    container: {
      width: "100%",
    },
    itemContainer: {
      marginBottom: 10,
      borderRadius: 12,
      backgroundColor: colors.common.white.main,
      overflow: "hidden",
      elevation: 2,
      shadowColor: colors.common.black.main,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 12,
      borderRadius: 12,
      backgroundColor: dark
        ? colors.common.black.light
        : colors.common.grey.light,
    },
    headerText: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text.main,
      flex: 1,
    },
    content: {
      padding: 12,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      backgroundColor: colors.common.white.main,
    },
    contentText: {
      fontSize: 14,
      lineHeight: 20,
      color: colors.text.light,
    },
  });