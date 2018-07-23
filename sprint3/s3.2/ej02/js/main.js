'use strict';
const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
  ];

const newUsers = [...users,{name: 'Argus Filch ', time: 78} ];

console.log(newUsers);

const usersSplit = (first, ...rest) => {
  const firstUser = first;
  const newWinner = {...firstUser, winner: 1};
  console.log(newWinner);
}
usersSplit(...users);