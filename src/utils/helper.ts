export const objectDeepClone = (obj = {}) => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {
    return obj;
  }
};
export const debounceFn = (fn: (...args: any) => void, interval = 1000) => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: any) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, interval);
  };
};
