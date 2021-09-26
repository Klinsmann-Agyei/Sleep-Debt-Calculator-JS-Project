const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day){
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 8;
        break;
      case "wednessday":
        return 7;
        break;
      case "thursday":
        return 6;
        break;
      case "friday":
        return 9;
        break;
      case "saturday":
        return 5;
        break;
      case "sunday":
        return 8;
        break;
      default :
        return "Wrong Day";
        break;
    }
  
  }
  //console.log(getSleepHours("Saturday"))
  var getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednessday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
      if (actualSleepHours === idealSleepHours){
        console.log("You got a perfect amount of sleep");
      }
      else if (actualSleepHours > idealSleepHours){
        console.log("You got more sleep");
      }
      else if (actualSleepHours < idealSleepHours){
        console.log("You got " + (idealSleepHours - actualSleepHours) + " hour(s) less sleep than you needed this week. Get some rest.");
      }
      else {
        console.log("Error in Your code")
        
      }
  };
  calculateSleepDebt();