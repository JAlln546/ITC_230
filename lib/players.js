let players = [
  {
    name: 'Carli Lloyd',
    position: 'forward',
    number: 10
  },
  {
    name: 'Alex Morgan',
    position: 'forward',
    number: 13
  },
  {
    name: 'Ali Krieger',
    position: 'defender',
    number: 11
  },
  {
    name: 'Becky Sauerbrunn',
    position: 'defender',
    number: 4
  },
  {
    name: 'Megan Rapinoe',
    position: 'forward',
    number: 15
  }
];



exports.getAll = () => {
  return players;
}

exports.get = (name) => {
  return players.find((p) => {
    return p.name === name;
  });
};

exports.delete = (name) => {
  const oldLength = players.length;
  players = players.filter((item) => {
    return p.name !== name;
  });
  return {deleted: oldLength !== players.length, total: players.length };
};

exports.add = (newPlayer) => {
  const oldLength = players.length;
  let found = this.get(newPlayer.name);
  if (!found) {
    players.push(newPlayer);
  }
  return {added: oldLength !== players.length, total: players.length};
};
