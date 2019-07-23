import { expect } from "chai";
import Typeur from "../src/typeur";

describe("Testing Typeur", (): void => {
  const defaultArgs = [];

  it("Class Typeur can be instanciated", (): void => {
    expect((): void => {
      new Typeur(...defaultArgs);
    }).not.to.throw();
  });
});
