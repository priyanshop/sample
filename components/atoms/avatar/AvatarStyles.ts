import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export const getSize = (size: 'sm' | 'md' | 'lg' | 'xl'): number => {
   switch (size) {
      case 'sm':
         return 40;
      case 'md':
         return 60;
      case 'lg':
         return 80;
      case 'xl':
         return 100;
      default:
         return 40;
   }
};

type AvatarStyles = {
   avatarContainer: ViewStyle;
   gradientBorder: ViewStyle;
   avatar: ViewStyle;
   editButton: ViewStyle;
   initialsText: TextStyle;
};

export const createStyles = (avatarSize: number, border: boolean): AvatarStyles =>
   StyleSheet.create({
      avatarContainer: {
         width: avatarSize,
         height: avatarSize,
         borderRadius: avatarSize / 2,
      },
      gradientBorder: {
         width: avatarSize,
         height: avatarSize,
         borderRadius: avatarSize / 2,
         alignItems: 'center',
         justifyContent: 'center',
      },
      avatar: {
         width: avatarSize - (border ? 8 : 0),
         height: avatarSize - (border ? 8 : 0),
         borderRadius: (avatarSize - (border ? 8 : 0)) / 2,
      },
      editButton: {
         position: 'absolute',
         bottom: 0,
         right: 0,
         width: 30,
         height: 30,
         borderRadius: 15,
         justifyContent: 'center',
         alignItems: 'center',
      },
      initialsText: {
         fontFamily: 'BeVietnamPro-Medium',
         fontSize: avatarSize * 0.45,
         textAlign: 'center',
         textAlignVertical: 'center',
         includeFontPadding: false,
         padding: 0,
         margin: 0,
         transform: [{ translateY: avatarSize * -0.04 }],
      },
   });
