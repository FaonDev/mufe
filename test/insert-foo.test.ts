import { mufe, useMufe } from "../dist";

test("insert_foo", () => {
  useMufe("foo", {
    update: () => "bar",
  });

  expect(mufe.get("foo")).toBe("bar");
});
