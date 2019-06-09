'use strict'
const expect = require("chai").expect;
const player = require("../lib/players.js");

describe("Player", function() {

  it("returns player", function() {
    let result = player.get("Ali Krieger");
    expect(result).to.deep.equal({name: "Ali Krieger", position: "Defender", number:11});
  });


  it("fails to return invalid player", function() {
    let result = player.get("does not exist");
    expect(result).to.be.undefined;
  });

  //test case to add a player to the data file
  it("adds a new player", function() {
    let result = player.add({player:"Tobin Heath", position: "Midfield", number:17});
    expect(result.added).to.be.true;
  });

  it("fails to add existing player", function() {
    let result = player.add({player:"Ali Krieger", position:"Defender", number:11});
    expect(result.added).to.be.false;
  });

  it("deletes an existing player", function() {
    let result = player.delete("Ali Krieger");
    expect(result.deleted).to.be.true;
  });

  it("fails to delete an invalid player", function() {
    let result = player.delete("Allie Long");
    expect(result.deleted).to.be.false;
  });
});
