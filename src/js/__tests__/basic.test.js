import Team from '../app.js';

test('add', () => {
  const team = new Team();
  team.add('Bower');
  team.add('Angel');
  expect(Array.from(team.members)).toEqual(['Bower', 'Angel']);

});

test('addAll', () => {
  const team = new Team();
  team.addAll('Bower', 'Angel', 'Swordsman', 'Mage');
  expect(team.toArray()).toEqual(['Bower', 'Angel', 'Swordsman', 'Mage']);
});

test('toArray', () => {
  const team = new Team();
  team.add('Bower');
  team.add('Angel');
  expect(team.toArray()).toEqual(['Bower', 'Angel']);
});

test('Error', () => {
  const team = new Team();
  team.add('Bower');
  team.add('Angel');
  expect(() => {
    team.add('Bower');
  }).toThrowError('Этот персонаж уже есть в команде');
});
