> **Disclaimer:** This package is in alpha release and isn't recommended for production.

# Mufe.js

A cache-based database.

- **Familiar:** Based on React hooks.
- **Fast:** Fully synchronous queries.
- **Lightweight:** No dependencies needed.

## Usage (TypeScript)

```ts
import { useMufe } from "mufe";

const foo = useMufe({
  id: "foo",
  revalidate: 5, // 5 seconds
  update: () => "bar",
});

console.log(foo); // bar
```

## Examples

[Mufe with Prisma](https://github.com/FaonDev/mufe-prisma)
