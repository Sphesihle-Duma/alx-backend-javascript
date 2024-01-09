// Assume getListStudents is already defined and implemented

function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrades = newGrades.filter((grade) => grade.studentId === student.id);

      if (matchingGrades.length > 0) {
        return {
          ...student,
          grade: matchingGrades[0].grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
