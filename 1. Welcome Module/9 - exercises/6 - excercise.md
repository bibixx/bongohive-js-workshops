### 6. Team health
Let's say we have a game in which players can group into a team,
if so we want to calculate their whole health points level

hint: try to use rest operator to make your life easier

``` js
const player1 = {
  name: 'Andrea',
  hp: 120
}

const player2 = {
  name: 'Will',
  hp: 85
}

const player3 = {
  name: 'Arthur',
  hp: 90
}

function calculateTeamHealth() {
  // Your code goes here
}

calculateTeamHealth(player1, player2) // 205
calculateTeamHealth(player1, player3) // 210
calculateTeamHealth(player2) // 85
calculateTeamHealth(player1, player2, player3) // 295
```
