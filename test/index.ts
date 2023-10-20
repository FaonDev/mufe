import { MufeClient } from "../dist";

const mufe = new MufeClient({
  revalidation: 30, // 30 seconds
});

const [foo, setFoo] = mufe.use<string>("foo");

if (!foo) setFoo("bar");
