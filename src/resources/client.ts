export class MufeClient {
  cacheMap = new Map<string, any>();

  constructor(public options?: { revalidation?: number }) {}

  use<T>(key: string): [value: T, (value: T) => void] {
    const value = this.cacheMap.get(key);

    const setValue = (value: T) => {
      this.cacheMap.set(key, value);

      const revalidation = this.options?.revalidation;

      if (!revalidation || isNaN(revalidation)) return;

      setTimeout(() => {
        this.cacheMap.delete(key);
      }, revalidation * 1000);
    };

    return [value, setValue];
  }
}
