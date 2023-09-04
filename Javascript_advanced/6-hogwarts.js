function studentHogwarts () {
	let privateScore = 0;
	let name = null;

	function changeScoreBy(points) {
		privateScore += points;
	}

	function setName(newName) {
		name = newName;
	}

	function rewardStudent() {
		changeScoreBy(1);
	}

	function penalizeStudent() {
		changeScoreBy(-1);
	}

	function getScore() {
		return (name + ": " + privateScore)
	}
	return {
		setName: setName,
		rewardStudent: rewardStudent,
		penalizeStudent: penalizeStudent,
		getScore: getScore
	};
}

/* harry is an instance of studentHogwarts */
let harry = new studentHogwarts();
/* Set the name of the object to Harry */
harry.setName("Harry");
/* Reward the student four times */
for (i = 0; i < 4; i++) {
	harry.rewardStudent();
}
/* Log to the console the name and score */
console.log(harry.getScore());

/* draco is an instance of studentHogwarts */
let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (i = 0; i < 3; i++) {
	draco.penalizeStudent();
}
console.log(draco.getScore());
