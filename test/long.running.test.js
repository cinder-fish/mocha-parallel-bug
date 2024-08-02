describe("long running test", function () {
  this.timeout(10_000);

  it("fails after 5000ms", async function () {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    throw new Error();
  });
});
