import { Colors } from "@/theme/types";

export function getBackgroundColor(
   colors: Colors,
   variant: 'warning' | 'info' | 'success' | 'error',
): string {
   const map = {
      warning: colors.common.yellow.main,
      info: colors.common.blue.main,
      success: colors.common.green.main,
      error: colors.common.red.main,
   } as const;

   return map[variant];
}

export const bannerUtils = {
   getBackgroundColor,
};
