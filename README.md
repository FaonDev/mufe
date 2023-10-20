> **Disclaimer:** This package is in alpha release and isn't recommended for production.

# Mufe.js

A cache-based database.

- **Familiar:** Based on React hooks.
- **Fast:** Fully synchronous queries.
- **Lightweight:** No dependencies needed.

## Usage (TypeScript)

```ts
import { MufeClient } from "mufe";

const mufe = new MufeClient({
  revalidation: 30, // 30 seconds
});

const [foo, setFoo] = mufe.use<string>("foo");

if (!foo) setFoo("bar");
```
