function createClassRoom (numbersOfStudents) {
	function studentSeat (seat) {
		return function() {
			return seat;
		};
	}
	/* create the empty array */
	let students = [];
	/* to add news elements to an array */
	for (let i = 0; i < numbersOfStudents; i++) {
		students.push(studentSeat(i + 1));
	}
	return (students);
}

const classRoom = createClassRoom(16);

console.log(classRoom[12]());

