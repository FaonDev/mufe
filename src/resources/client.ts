export const mufe = new Map();

export function useMufe<T>({
  id,
  revalidate,
  update,
}: {
  id: any;
  revalidate?: number;
  update: () => T;
}): T {
  const value = mufe.has(id) ? mufe.get(id) : mufe.set(id, update()).get(id);

  if (mufe.has(id) && revalidate)
    setTimeout(() => mufe.delete(id), revalidate * 1000);

  return value;
}
