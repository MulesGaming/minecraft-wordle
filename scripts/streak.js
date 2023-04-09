// Load message

console.log("Streak manager loaded!");

// Set streak 

function addToStreak (amountToAdd) {
  const currentStreak = localStorage.getItem("streak");
  localStorage.setItem("streak", currentStreak * 1 + amountToAdd);
};

// Clear

function clearStreak () {
  localStorage.setItem("streak", 0);
};

// Get streak

function getCurrentStreak () {
  const currentStreak = localStorage.getItem("streak");
  return currentStreak;
};




