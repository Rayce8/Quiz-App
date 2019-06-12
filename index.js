const questionSet = [
    { 
      number: 1,
      text: `Khal Drogo killed Viserys using what kind of weapon?`,
      ans1: `Molten Gold`,
      ans2: `Arakh`, 
      ans3: `Crossbow`, 
      ans4: `Axe`,
      feedbackImg: 'https://cdn3.whatculture.com/images/2016/02/FT4vNL5x-600x338.jpg'
    },

    { 
        number: 2,
        text: `What color is the cloak of the kingsguard?`,
        ans1: `Magenta`,
        ans2: `White`, 
        ans3: `Blue`, 
        ans4: `Red`,
        feedbackImg: 'http://www.theknightshoptrade.com/media/catalog/product/cache/12/image/650x/003de89414261b018377b80f13c8c591/a/h/ah4401_4.jpg'
      },
      
      { 
        number: 3,
        text: `Where was Varys born?`,
        ans1: `Pentos`,
        ans2: `Riverrun`, 
        ans3: `Bravos`, 
        ans4: `Lys`,
        feedbackImg: 'data:image/jpeg;base64,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'
      },
      
      { 
        number: 4,
        text: `Who seriously injured Peter Baelish in a duel?`,
        ans1: `Jaime Lannister`,
        ans2: `Brandon Stark`, 
        ans3: `Sir Yohn Royce`, 
        ans4: `Ashara Dayne`,
        feedbackImg: 'https://awoiaf.westeros.org/images/thumb/d/d7/Brandon_stark_the_wild_wolf_by_mike_hallstein-dadi0nx.jpeg/350px-Brandon_stark_the_wild_wolf_by_mike_hallstein-dadi0nx.jpeg'
      },

      { 
        number: 5,
        text: `Who poisoned Jon Arryn?`,
        ans1: `Gendry Waters`,
        ans2: `Cersei Lannister`, 
        ans3: `Lysa Arryn`, 
        ans4: `Grand Maester Pycelle`,
        feedbackImg: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/lysa-arryn-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg'
      },

      { 
        number: 6,
        text: `Who orchestrated an assassination attempt on Bran Stark?`,
        ans1: `Margaery Tyrell`,
        ans2: `Joffrey Baratheon`, 
        ans3: `John Snow`, 
        ans4: `Rob Stark`,
        feedbackImg: 'https://vignette.wikia.nocookie.net/gameofthrones/images/4/4d/Purple_Wedding.png/revision/latest?cb=20150210223603'
      },
        
      { 
        number: 7,
        text: `What happens to Arya after she kills the singer from the Nights Watch?`,
        ans1: `She tries to rob him`,
        ans2: `She cries`, 
        ans3: `She goes blind`, 
        ans4: `She breaks her leg`,
        feedbackImg: 'https://cdn3.movieweb.com/i/article/AyObqXnjurZqCmk0pntKbBFrOR0Rl6/1200:100/Game-Of-Thrones-Season-6-Blind-Arya-Maisie.jpg'
      },

      { 
        number:8,
        text: `Who does Daenerys choose as her champion during the siege of Meereen?`,
        ans1: `Strong Belwas`,
        ans2: `Jorah Mormont`, 
        ans3: `Ramsay Snow`, 
        ans4: `Fire`,
        feedbackImg: 'https://awoiaf.westeros.org/images/thumb/8/81/Belwas_by_David_Sondered_FFG.jpg/300px-Belwas_by_David_Sondered_FFG.jpg'
      },

      { 
        number: 9,
        text: `Who was the famous outlaw that Sir Arthur Dayne killed in single combat?`,
        ans1: `Catelyn Stark`,
        ans2: `The Smiling Knight`, 
        ans3: `The Hound`, 
        ans4: `Rhaegar Targaryen`,
        feedbackImg: 'https://vignette.wikia.nocookie.net/iceandfire/images/a/ad/The_Smiling_Knight2.png/revision/latest?cb=20160205023627'
      },

      { 
        number: 10,
        text: `Who did Rhaegar Targaryen unhorse in the tourney of Harrenhal to win the tournament?`,
        ans1: `Berrick Donderion`,
        ans2: `The Mountain`, 
        ans3: `Sir Barristan Selmy`, 
        ans4: `Grand Master Marwyn`,
        feedbackImg: 'https://cdnb.artstation.com/p/assets/images/images/005/730/289/large/riccardo-moscatello-barristan-selmy1.jpg?1493335438'
      }
    ];

    const ANSWERS = [
        `Molten Gold`,
        `White`,
        `Lys`,
        `Brandon Stark`,
        `Lysa Arryn`,
        `Joffrey Baratheon`,
        `She goes blind`,
        `Strong Belwas`,
        `The Smiling Knight`,
        `Sir Barristan Selmy`
    ];

    let questionNum = 0;

    let correctAnswers = 0;
    
    let userQuestion = 1;

    function renderQuestion() {
      return `
    <div class = 'quizBody'>
      <header>
          <div class = 'header'>
              <img class ='header' src="https://logos-download.com/wp-content/uploads/2016/09/Game_of_Thrones_logo_logotype_wordmark.png">
          </div>
          <div class="question counter">
              <ul>
                  <li> Question: <span class="questionNumber">${userQuestion}</span>/10</li>
                    <li>Score: <span class="score">${correctAnswers}</span></li>
              </ul>
          </div>
          </header>
      <main>
      <div class = 'quiz'>
          <h2> ${questionSet[questionNum].text} </h2>
          <form>
              <fieldset>
                  <label>
                      <input type = 'radio' name = 'answer' value = '${questionSet[questionNum].ans1}' required>${questionSet[questionNum].ans1}</input>
                  </label>
                  <label>
                      <input type = 'radio' name = 'answer' value = '${questionSet[questionNum].ans2}' required>${questionSet[questionNum].ans2}</input>
                  </label>
                  <label>
                      <input type = 'radio' name = 'answer' value = '${questionSet[questionNum].ans3}' required>${questionSet[questionNum].ans3}</input>  
                  </label>
                  <label>
                      <input type = 'radio' name = 'answer' value = '${questionSet[questionNum].ans4}' required>${questionSet[questionNum].ans4}</input>
                  </label>
                  <button type = 'submit' class = 'submitAnswer'>Submit</button>
              </fieldset> 
          </form>
      </div>
      </main>
      </div>`;
  };

  function handleStart() {
    $('.start').on('click', '.startButton', function(event) {
        $('.quizBody').html(renderQuestion());
    });
}

function handleSubmit() {
  $('.quizBody').submit(function(event) {
      event.preventDefault();
      let chosen = $('input[name=answer]:checked');
      let chosenAnswer = chosen.val();
      let correctAnswer = `${ANSWERS[questionNum]}`;
  if (chosenAnswer === correctAnswer) {
        correctAnswers ++;
        $('.quizBody').html(`
<div class = 'quizBody'>
<header>
          <div class = 'header'>
              <img class ='header' src="https://logos-download.com/wp-content/uploads/2016/09/Game_of_Thrones_logo_logotype_wordmark.png">
          </div>
          <div class="question counter">
              <ul>
                  <li> Question: <span class="questionNumber">${userQuestion}</span>/10</li>
                    <li>Score: <span class="score">${correctAnswers}</span></li>
              </ul>
          </div>
          </header>
  <main>
<div class = 'feedback'>
<img class = 'goodFeedback' src = '${questionSet[questionNum].feedbackImg}' alt = 'feedback img'>
<h1>Great Job!</h1>
<p> ${ANSWERS[questionNum]} is the correct answer! </p>
<button type = 'button' class = 'next'>Next Question</button>
</div>
</main>
</div>
`);
  } else {
      $('.quizBody').html(`
<div class = 'quizBody'>
<header>
          <div class = 'header'>
              <img class ='header' src="https://logos-download.com/wp-content/uploads/2016/09/Game_of_Thrones_logo_logotype_wordmark.png">
          </div>
          <div class="question counter">
              <ul>
                  <li> Question: <span class="questionNumber">${userQuestion}</span>/10</li>
                    <li>Score: <span class="score">${correctAnswers}</span></li>
              </ul>
          </div>
          </header>
  <main>
<div class = 'feedback'>
<img class = 'negative' src = 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492179370/articles/2015/07/10/game-of-thrones-superfan-obama-is-very-upset-about-jon-snow-s-death/150710-yamato-got-tease_neikye' alt = 'feedback img'>
<h1>Oh no...</h1>
<p> You answered ${chosenAnswer}, but ${ANSWERS[questionNum]} is actually the correct answer. </p>
<button type = 'button' class = 'next'>Next Question</button>
</div>
</main>
</div>
`);
  } });
}

function handleNext() {
  $('.quizBody').on('click', '.next', function(event) {
    questionNum ++;
    userQuestion ++;
    if (userQuestion <= questionSet.length) {
      $('.quizBody').html(renderQuestion());
    } else {
      $('.quizBody').html(scorePage());
    }
  })
}

function scorePage () {
  return `
  <div class = 'quizBody'>
  <header>
          <div class = 'header'>
              <img class ='header' src="https://logos-download.com/wp-content/uploads/2016/09/Game_of_Thrones_logo_logotype_wordmark.png">
          </div>
          <div class="question counter">
              <ul>
                  <li> Question: <span class="questionNumber">${userQuestion}</span>/10</li>
                    <li>Score: <span class="score">${correctAnswers}</span></li>
              </ul>
          </div>
          </header>
    <main>
  <div class = 'finalScore'>
  <img class = 'goodFeedback' src = 'https://i.imgur.com/Sffd7vI.jpg' alt = 'The Radiance'>
  <h1>How did you do?</h1>
  <p>You got ${correctAnswers} questions right!</p>
  <p>Want to try again?</p>
  <button type = 'button' class = 'restart'>Restart Quiz</button>
  </div>
  </main>
  </div>`
}

function handleRestart() {
  $('.quizBody').on('click', '.restart', function(event){
    location.reload();
  });
}


function quiz() {
  handleStart();
  handleSubmit();
  handleRestart();
  handleNext();
}

$(quiz);
    
