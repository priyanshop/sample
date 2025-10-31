import { Image } from '@/components/atoms';
import { useSiliconUIContext } from '@/theme';
import React from 'react';
import { Animated, Dimensions, FlatList, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { styles } from './ImageCarrouselStyle';
import { useImageCarousel } from './hooks/useImageCarousel';

const { width, height: screenHeight } = Dimensions.get('window');

interface ImageCarouselProps {
   images?: string[];
   height?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
   images,
   height = screenHeight * 0.68,
}) => {
   const { colors } = useSiliconUIContext();

   const {
      currentIndex,
      scrollX,
      slidesRef,
      viewableItemsChanged,
      viewConfig,
      handlePreviousImage,
      handleNextImage,
   } = useImageCarousel({ images });

   const renderItem = ({ item }: { item: string }): React.ReactElement => (
      <Image
         source={typeof item === 'object' ? item : item}
         style={{ width: width, height }}
         contentFit="cover"
      />
   );

   if (!images || images?.length === 0) {
      return (
         <View
            style={[
               styles.container,
               { height },
               styles.noImagesContainer,
               { backgroundColor: colors.backdrop },
            ]}
         >
            <Text variant="bodyMedium">No images available</Text>
         </View>
      );
   }

   return (
      <View style={[styles.container, { height }]}>
         <FlatList
            data={images}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={(_, index) => index.toString()}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
               useNativeDriver: false,
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
         />
         {images?.length > 1 && (
            <View style={styles.overlay}>
               <IconButton
                  icon="chevron-left"
                  iconColor={colors.common.white.main}
                  size={30}
                  onPress={handlePreviousImage}
                  style={styles.leftArrow}
               />
               <IconButton
                  icon="chevron-right"
                  iconColor={colors.common.white.main}
                  size={30}
                  onPress={handleNextImage}
                  style={styles.rightArrow}
               />
            </View>
         )}
         <View style={styles.counter}>
            <Text style={[styles.counterText, { color: colors.common.white.main }]}>
               {`${currentIndex + 1}/${images.length}`}
            </Text>
         </View>
      </View>
   );
};
