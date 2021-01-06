 document.getElementById("determine").addEventListener("click", myfunction);
    function myfunction () {
    let day;
    let age;
    day = document.getElementById("daytyped").value;
    age = document.getElementById("agetyped").value;
    
    if ((day == "Tuesday" || day == "Thursday") && (age > 12 && age < 21)) {
      alert('You are eligible for the student discount!')
    }
    else if (age < 5 || age > 95) {
      alert ('You are eligible for free entry!');
    }
     else if (age > 20 && age < 94) {
       alert ('You must pay regular price to be admitted!')
     }
    }