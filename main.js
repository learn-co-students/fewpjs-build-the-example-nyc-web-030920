// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};


// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function(){
  addLikeListener();
})

const addLikeListener = () => {
  let allLikeBtn = document.querySelectorAll('.like');
  allLikeBtn.forEach(likeBtn => {
    likeBtn.addEventListener('click', (event) => {
      let heart = event.target;
      mimicServerCall('idkUrl')
      .then(response => {
        console.log(response)
        heart.innerText = glyphStates[heart.innerText];
        heart.style.color = colorStates[heart.style.color];
      })
      .catch(error => {
        console.log(error)
        document.getElementById("modal").className = "";
      })
    })
  })
}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
