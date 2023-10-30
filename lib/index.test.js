const index = require("../index");

test("when circle is passed as a param, returnCircle is run", () => {
  const shape = "Circle";
  expect(index.whichShape(shape)).toEqual(index.newCircle);
});

// test('switch based on answers', () => {
//     const
// })
// describe("index rendering", () => {
//   describe("return a Circle with this function", () => {
//     it("func should return newCircle.htmlRender()", () => {
//       returnCircle("yellow", "BCG", "Red");
//       expect(`${newCircle.htmlRender()}`).toEqual(
//         `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">URM</text></svg>`
//       );
//     });
//   });
// });
