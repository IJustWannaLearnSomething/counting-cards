// count variable for storing points
var count = 0;

function countCards(card) {
 
  // counting points
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 7:
    case 8:
    case 9:
        break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
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
