describe("causes an unhandled rejection", function () {
  it("throws after 3000ms", function () {
    setTimeout(() => {
      throw new Error("rejected after 3000ms");
    }, 3000);
  });
});
