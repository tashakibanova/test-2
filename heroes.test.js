import { sortHeroesByHealth } from './heroes.js'

test('Сортировка по убыванию уровня здоровья', () => {
    let heroes = [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ];
  
    let sortedHeroes = heroes.sort((a, b) => b.health - a.health);
  
    expect(sortedHeroes).toEqual([
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ]);
  });
  
  