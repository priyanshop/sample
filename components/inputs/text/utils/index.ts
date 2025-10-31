function cutLength(text: string, length: number): string {
   if (text.length <= length) return text;
   return text.slice(0, length) + '...';
}

const set = <T = string>(
   value: T,
   length?: number,
   callback?: React.ReactNode | (() => React.ReactNode),
): string => {
   const output = (value ?? callback ?? '')?.toString()?.trim();
   switch (true) {
      case !!length:
         return cutLength(output, length);
      default:
         return output;
   }
};

export const text = { set };
