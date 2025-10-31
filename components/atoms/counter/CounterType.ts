export type CounterType = {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
  onValueChange?: (value: number) => void;
};
