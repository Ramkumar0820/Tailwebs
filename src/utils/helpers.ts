// /**
//  * General helper functions
//  */

// export const classNames = (...classes: (string | undefined | false)[]): string => {
//   return classes.filter(Boolean).join(' ');
// };

// export const debounce = (func: Function, delay: number) => {
//   let timeoutId: ReturnType<typeof setTimeout>;
//   return (...args: any[]) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func(...args), delay);
//   };
// };

// export const throttle = (func: Function, limit: number) => {
//   let inThrottle: boolean;
//   return (...args: any[]) => {
//     if (!inThrottle) {
//       func(...args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// };
