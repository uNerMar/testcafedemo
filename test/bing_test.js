import { Selector } from "testcafe";

fixture("bing search").page(
  "https://bing.com/"
);

test("Verify bing search page loads properly", async t => {
  console.log("does this echo to console ? ");
  const searchTextField = Selector("input");
  await t.expect(searchTextField.exists).ok();
  const type = (await searchTextField.getAttribute("type")).valueOf
  console.log("type " + type); // function valueOf() { [native code] }
  //   await t.expect(type).eql("search"); // this does not work AssertionError: expected [Function: valueOf] to deeply equal 'search'

  console.log("type " + await searchTextField.getAttribute("type")); // so this syntax - can only console out the resolution of function which implicity calls valueOf ?
  await t.expect(await searchTextField.getAttribute("type")).eql("search"); // so what does ok() do ? similar to done() ?
});