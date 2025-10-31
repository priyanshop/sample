import { useSiliconUIContext } from "@/theme";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
   Modal as NativeModal,
   StyleSheet,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
   ViewStyle,
} from "react-native";
import { useModalContext } from "../hooks/useModalContext";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  dismissibleArea: {
    flex: 1,
  },
  sheet: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "relative",
    overflow: "hidden",
    zIndex: 1000,
  },
  closeButton: {
    height: 36,
    width: 36,
    borderRadius: 20,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
  },
});

type Props = {
  children?: React.ReactNode;
  height?: number;
  style?: ViewStyle;
};

export const Modal: React.FC<Props> = ({ children, style, height }) => {
  const { colors, dark } = useSiliconUIContext();
  const { isVisible, onClose, height: defaultHeight } = useModalContext();

  const HEIGHT = height ?? defaultHeight;

  return (
    <NativeModal
      animationType="slide"
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.dismissibleArea} />
      </TouchableWithoutFeedback>
      <View
        style={[
          styles.sheet,
          {
            boxShadow: "0px -4px 10px 5px rgba(0, 0, 0, 0.1)",
            maxHeight: HEIGHT,
            height: "100%",
            backgroundColor: dark
              ? colors.common.grey.dark
              : colors.common.white.main,
          },
          style,
        ]}
      >
        <TouchableOpacity
          onPress={onClose}
          style={[
            styles.closeButton,
            {
              backgroundColor: !dark
                ? colors.common.grey.medium
                : colors.common.white.light,
            },
          ]}
        >
          <AntDesign
            name="close"
            size={22}
            color={dark ? colors.common.grey.medium : colors.common.black.light}
          />
        </TouchableOpacity>
        {children}
      </View>
    </NativeModal>
  );
};
