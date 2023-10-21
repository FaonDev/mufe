export const mufe = new Map<string, any>();

/** The Mufe's hook
 * @param key The cache key
 * @param options Extra options
 */

export function useMufe<T>(
  key: string,

  options?: {
    /** Revalidation time (in seconds) */

    revalidate?: number;

    /** Replace cached value (can be async) */

    update?: () => T;
  },
): T | null {
  // Return cached value if available
  if (mufe.has(key)) return mufe.get(key);

  // Returning null value if unavailable
  if (!options?.update) return null;

  // Destructuring options
  const { revalidate, update } = options;

  // Declaring updated value
  const value = update();

  // Setting updated value in cache
  mufe.set(key, value);

  // Removing cached value after an informed period
  if (revalidate) setTimeout(() => mufe.delete(key), revalidate * 1000);

  // Returning updated value
  return value;
}
