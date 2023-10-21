import { useMufe } from "../dist";

const foo = useMufe({
  id: "foo",
  revalidate: 5, // 5 seconds
  update: () => "bar",
});

console.log(foo); // bar
