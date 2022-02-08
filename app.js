let teamOneScore = 0
let teamTwoScore = 0


function increaseTeamOneScore() {
  teamOneScore++
  drawScore()
}

function increaseTeamTwoScore() {
  teamTwoScore++
  drawScore()
}

function decreaseTeamOneScore() {
  teamOneScore--
  drawScore()
}

function decreaseTeamTwoScore() {
  teamTwoScore--
  drawScore()
}

function drawScore() {
  let teamOneElem = document.getElementById('team-one-sb')
  teamOneElem.innerText = 'Team One: ' + teamOneScore.toString()
  let teamTwoElem = document.getElementById('team-two-sb')
  teamTwoElem.innerText = 'Team Two: ' + teamTwoScore.toString()
}

function resetScore() {
  teamOneScore = 0
  teamTwoScore = 0
  drawScore()
}

function addTeam() {
  let newTeamTemplate = ""
  newTeamTemplate += `
  <div class="row justify-content-between">
  <div class="col-4 d-flex justify-content-center">
    <div>
      <button onclick="increaseTeamOneScore()">Team One Point +</button>
    </div>
    <div>
      <button onclick="decreaseTeamOneScore()"> Team One Point -</button>
    </div>
  </div>
  <div class="col-4 d-flex align-items-around m-auto">
  <h5 id="team-one-sb">Team One: </h5>
</div>
  `
}