import { power } from "./power.js";
import { add } from "./add.js";

describe("hooks", function () {
  //
  beforeAll(() => {
    console.log("Run at the beginning of tests");
  });

  afterAll(() => {
    console.log("Run after all of the tests");
  });

  beforeEach(() => {
    console.log("Run at the beginning of each test");
  });

  afterEach(() => {
    console.log("Run at the end of each test");
  });

  test("1 to power 2 to equal 1", () => {
    console.log("1 to power 2 to equal 1");
    expect(power(1, 2)).toBe(1);
  });

  test("3 to power 2 to equal 9", () => {
    console.log("3 to power 2 to equal 9");
    expect(power(3, 2)).toBe(9);
  });

  test("5 to power 2 to equal 25", () => {
    console.log("5 to power 2 to equal 25");
    expect(power(5, 2)).toBe(25);
  });

  test("5 to power 2 to equal 25", () => {
    console.log("5 to power 2 to equal 25");
    expect(power("5", 2)).toBe(25);
  });

  test("1 plus 1 to equal 2", () => {
    console.log("5 to power 2 to equal 25");
    expect(add(1, 1)).toBe(2);
  });

  test("1 plus 1 to equal 2", () => {
    console.log("5 to power 2 to equal 25");
    expect(add(1, "1")).toBe(2);
  });
});