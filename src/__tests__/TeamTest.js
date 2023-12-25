import Team from "../Team";

const team = new Team(),
    char1 = {name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10},
    char2 = {name: 'Маг', type: 'Magician', health: 50, level: 1, attack: 40, defence: 10};

test('Testing iterator', () => {
    team.add(char1);
    team.add(char2);
    let membersIterator = team.members[Symbol.iterator]();
    expect(membersIterator.next().value).toEqual(char1);
    expect(membersIterator.next().value).toEqual(char2);
    expect([...team]).toEqual([char1, char2]);
});
