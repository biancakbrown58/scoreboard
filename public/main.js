const main = () => {}
const calculateScore1 = addOne => {
  console.log(addOne + 'button clicked')
  const teamOneScore = document.querySelector('.team-1-score').textContent
  const total = parseInt(teamOneScore) + 1
  console.log(total)
  document.querySelector('.team-1-score').textContent = total
}
const subtractScore1 = subtractOne => {
  const teamOneSubtract = document.querySelector('.team-1-score').textContent
  const total2 = parseInt(teamOneSubtract) - 1
  console.log(total2)
  document.querySelector('.team-1-score').textContent = total2
}
const teamName1 = changeTeam1 => {
  const newNameOne = document.querySelector('input').value
  const replaceName1 = newNameOne
  console.log(replaceName1)
  document.querySelector('.team-1-name').textContent = replaceName1
}

// team2
const calculateSecondScore = addOneToTwo => {
  const teamTwoScore = document.querySelector('.team-2-score').textContent
  const totalTeam2 = parseInt(teamTwoScore) + 1
  console.log(totalTeam2)
  document.querySelector('.team-2-score').textContent = totalTeam2
}
const subtractScore2 = subtractOneFromTwo => {
  const teamTwoSub = document.querySelector('.team-2-score').textContent
  const subTeam2 = parseInt(teamTwoSub) - 1
  console.log(subTeam2)
  document.querySelector('.team-2-score').textContent = subTeam2
}
const teamName2 = changeTeam2 => {
  const newNameTwo = document.querySelector('.team-2-input').value
  const replaceName2 = newNameTwo
  console.log(replaceName2)
  document.querySelector('.team-2-name').textContent = replaceName2
}

// team1
const calculateNewScore1 = () => {
  calculateScore1()
}
const calculateNewScore2 = () => {
  subtractScore1()
}
const newTeamName1 = () => {
  teamName1()
}

// team2
const calculateSecondNewScore1 = () => {
  calculateSecondScore()
}
const calculateSecondNewScore2 = () => {
  subtractScore2()
}
const newTeamName2 = () => {
  teamName2()
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', calculateNewScore1)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', calculateNewScore2)
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', newTeamName1)

// team 2
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', calculateSecondNewScore1)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', calculateSecondNewScore2)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', newTeamName2)
