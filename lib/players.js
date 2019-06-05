let players = [
  {
    name: 'Carli Lloyd',
    position: 'Forward',
    number: 10
  },
  {
    name: 'Alex Morgan',
    position: 'Forward',
    number: 13
  },
  {
    name: 'Ali Krieger',
    position: 'Defender',
    number: 11
  },
  {
    name: 'Becky Sauerbrunn',
    position: 'Defender',
    number: 4
  },
  {
    name: 'Megan Rapinoe',
    position: 'Forward',
    number: 15
  }
];


//get all items in array
exports.getAll = () => {
  return players;
}

//get by player name
exports.get = (name) => {
  return players.find((item) => {
    return item.name === name;
  });
};

//delete by player name
exports.delete = (name) => {
  const oldLength = players.length;
  players = players.filter((item) => {
    return item.name !== name;
  });
  return {deleted: oldLength !== players.length, total: players.length };
};

//add player
exports.add = (newPlayer) => {
  const oldLength = players.length;
  let found = this.get(newPlayer.name);
  if (!found) {
    players.push(newPlayer);
  }
  return {added: oldLength !== players.length, total: players.length};
};
