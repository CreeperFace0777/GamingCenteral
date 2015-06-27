// Dry (Dont Repeat Yourself)

function question(nameAsk,ageAsk,bothAsk) {
  if (nameAsk == 1) {
    fName = prompt("What's Your First Name?");
    lName = prompt("What's Your Last Name?");
    alert("Well Hello There "+fName+" "+lName+". Its Nice To Meet You");
  }
  else if (ageAsk == 1) {
    age = prompt("How Old Are You?");
    alert("Good To Know You Are "+age+" Years Old.");

  }
  else if (bothAsk == 1) {
    fName = prompt("What's Your First Name?");
    lName = prompt("What's Your Last Name?");
    age = prompt("How Old Are You?");
    alert("Well Hello There "+fName+" "+lName+". Its Nice To Meet You. So You're Currently "+age+" Years Old!?");
  }

  else {
    fName = prompt("What's Your First Name?");
    lName = prompt("What's Your Last Name?");
    age = prompt("How Old Are You?");
    alert("Well Hello There "+fName+" "+lName+". Its Nice To Meet You. So You're Currently "+age+" Years Old!?");
  }
}
