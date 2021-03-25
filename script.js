// count variable for storing points
var count = 0;

// function for handeling input event
function inputHandler(event) {
  let card = document.querySelector(".input-button").value;
  document.querySelector(".result-output").value = countCards(card);
}

function countCards(card) {

  // reset input area
  document.querySelector(".input-button").value = "";
  // counting points
  switch(card) {
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
        count++;
        break;
    case '7':
    case '8':
    case '9':
        break;
    case 't':
    case 'k':
    case 'q':
    case 'k':
    case 'a':
        count--;
        break;
  }

  // if points are positive, return points and " Bet"
  if(count > 0) {
    return count + " Bet";
  }

  // control only comes here when points <= 0, return points and " Hold"
  return count + " Hold";

}

// function to reset count back to 0
function resetCount() {
  count = 0;
  document.querySelector(".result-output").value = "";
  document.querySelector(".input-button").value = "";
}
