import { useSiliconUIContext } from '@/theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

interface ImageHeaderProps {
   imageUrl: string;
   totalImages: number;
   currentImageIndex: number;
   onPreviousImage: () => void;
   onNextImage: () => void;
}

const styles = StyleSheet.create({
   imageContainer: {
      width: width,
      height: height,
      position: 'relative',
   },
   image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
   },
   overlay: {
      ...StyleSheet.absoluteFillObject,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: 16,
   },
   backButton: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 20,
      padding: 8,
   },
   navigationArrows: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 16,
      left: 0,
      right: 0,
      justifyContent: 'space-between',
      paddingHorizontal: 16,
   },
   imageCounter: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
   },
});

export const ImageHeader: React.FC<ImageHeaderProps> = ({
   imageUrl,
   totalImages,
   currentImageIndex,
   onPreviousImage,
   onNextImage,
}) => {
   const { colors } = useSiliconUIContext();
   const router = useRouter();

   return (
      <View style={styles.imageContainer}>
         <Image source={{ uri: imageUrl }} style={styles.image} />
         <View style={styles.overlay}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
               <IconButton
                  icon="arrow-left"
                  iconColor={colors.common.white.main}
                  size={24}
                  containerColor="transparent"
                  onPress={() => router.back()}
                  style={{ margin: 0, padding: 0 }}
               />
            </TouchableOpacity>
            <View style={styles.navigationArrows}>
               <IconButton
                  icon="chevron-left"
                  iconColor={colors.common.white.main}
                  size={30}
                  onPress={onPreviousImage}
               />
               <IconButton
                  icon="chevron-right"
                  iconColor={colors.common.white.main}
                  size={30}
                  onPress={onNextImage}
               />
            </View>
            <Text style={styles.imageCounter}>{`${currentImageIndex + 1}/${totalImages}`}</Text>
         </View>
      </View>
   );
};
