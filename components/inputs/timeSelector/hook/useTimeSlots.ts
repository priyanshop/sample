import dayjs from 'dayjs';
import { useFormContext } from 'react-hook-form';

interface UseTimeSlotsReturn {
   timeSlots: string[];
   isTimeDisabled: (time: string) => boolean;
}

interface UseTimeSlotsProps {
   selectedDate: Date | null;
   mode?: 'pickup' | 'dropoff';
}

export const useTimeSlots = ({ selectedDate, mode }: UseTimeSlotsProps): UseTimeSlotsReturn => {
   const methods = useFormContext();

   const startDate = methods.getValues('date.from');
   const startTime = methods.getValues('time.from');
   const endDate = methods.getValues('date.to');
   const endTime = methods.getValues('time.to');

   const generateTimeSlots = (): string[] => {
      const slots = [];
      const start = dayjs().set('hour', 8).set('minute', 0);
      const end = dayjs().set('hour', 21).set('minute', 0);

      let current = start;
      while (current.isBefore(end) || current.isSame(end)) {
         slots.push(current.format('HH:mm'));
         current = current.add(30, 'minute');
      }
      return slots;
   };

   const parseTime = (timeStr: string): dayjs.Dayjs => {
      const [hours, minutes] = timeStr.split(':').map(Number);
      return dayjs().set('hour', hours).set('minute', minutes);
   };

   const isTimeDisabled = (time: string): boolean => {
      if (mode === 'dropoff') {
         if (!startDate || !startTime) return false;

         const dropoffDate = selectedDate ? dayjs(selectedDate) : dayjs(new Date(endDate));
         const pickupDate = dayjs(new Date(startDate));

         if (!dropoffDate.isSame(pickupDate, 'day')) return false;

         const pickupTimeObj = parseTime(startTime);
         const currentTimeObj = parseTime(time);

         return currentTimeObj.isBefore(pickupTimeObj) || currentTimeObj.isSame(pickupTimeObj);
      }

      if (mode === 'pickup') {
         if (!endDate || !endTime) return false;

         const pickupDate = selectedDate ? dayjs(selectedDate) : dayjs(new Date(startDate));
         const dropoffDate = dayjs(new Date(endDate));

         if (!pickupDate.isSame(dropoffDate, 'day')) return false;

         const dropoffTimeObj = parseTime(endTime);
         const currentTimeObj = parseTime(time);

         return currentTimeObj.isAfter(dropoffTimeObj) || currentTimeObj.isSame(dropoffTimeObj);
      }

      return false;
   };

   return {
      timeSlots: generateTimeSlots(),
      isTimeDisabled,
   };
};
