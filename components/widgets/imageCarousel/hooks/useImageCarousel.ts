import { useRef, useState } from 'react';
import { Animated, FlatList, ViewToken } from 'react-native';

interface UseImageCarouselProps {
   images?: string[];
}

export const useImageCarousel = ({ images }: UseImageCarouselProps) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const scrollX = useRef(new Animated.Value(0)).current;
   const slidesRef = useRef<FlatList>(null);

   const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
         setCurrentIndex(viewableItems[0].index);
      }
   }).current;

   const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

   const handlePreviousImage = () => {
      if (currentIndex > 0) {
         slidesRef.current?.scrollToIndex({ index: currentIndex - 1, animated: true });
      }
   };

   const handleNextImage = () => {
      if (currentIndex < (images ?? []).length - 1) {
         slidesRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
      }
   };

   return {
      currentIndex,
      scrollX,
      slidesRef,
      viewableItemsChanged,
      viewConfig,
      handlePreviousImage,
      handleNextImage,
   };
};
