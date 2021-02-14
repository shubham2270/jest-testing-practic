const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

describe("googleSearch", () => {
  it("this is silly test", () => {
    expect("hello").toBe("hello");
    console.log(googleSearch("testest", dbMock));
  });

  it("is searching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
  });

  it("work with undefined and null unput", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
