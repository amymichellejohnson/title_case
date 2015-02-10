describe('titleCase', function() {
  it('capitalize the first letter of a one word title', function() {
    expect(titleCase("frankenstein")).to.equal("Frankenstein");
  });

  it("capitizes the first letter of each word in a multiple word title", function() {
    expect(titleCase("frankenstein's bride")).to.equal("Frankenstein's Bride");
  });

  it("does not capitalize articles & coordinators: a, an, and, the, for, but, or, of", function() {
    expect(titleCase("baby frankenstein and friends")).to.equal("Baby Frankenstein and Friends");
  });

  it("capitalizes the first word of a title regardless of being a article or coordinator", function() {
    expect(titleCase("a short history of epicodus and i")).to.equal("A Short History of Epicodus and I");
  });

  it("handles input in mixed case", function() {
    expect(titleCase("ThE peTs Of FrANkENstEIN")).to.equal("The Pets of Frankenstein");
  });

  
});
