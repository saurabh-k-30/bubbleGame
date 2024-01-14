let timer = 60;

let score = 0;

let getHit = 0;

function increaseScore()
{
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

function makeBubble() {
  let answer = "";

  for (let i = 0; i <= 51; i++) {
    answer += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector(".p-bottom").innerHTML = answer;
}

function runTimer() {
  let timeId = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeVal").textContent = timer;
    }
    else{
        clearInterval(timeId);
        document.querySelector('.p-bottom').innerHTML = `<h1>Game Over!</h1>`
    }
  }, 1000);
}

function makeHitValue()
{
    getHit = Math.floor(Math.random()*10)

    document.querySelector("#hitVal").textContent = getHit;
}

document.querySelector(".p-bottom").addEventListener('click',(dets)=>{
    let clickedNumber = Number(dets.target.textContent)
   if(clickedNumber === getHit)
   {
    increaseScore();
    makeBubble();
    makeHitValue();
   }
});

// increaseScore();

makeHitValue();

runTimer();

makeBubble();
