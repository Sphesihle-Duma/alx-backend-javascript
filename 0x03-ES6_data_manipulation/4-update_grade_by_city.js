export default function updatedStudentGradeByCity(arrayOfStudents, city, arrayOfGrades) {
  if (Array.isArray(arrayOfStudents) && Array.isArray(arrayOfGrades)) {
    return arrayOfStudents.filter((student) => student.location === city).map((obj) => {
      const findIdStudent = arrayOfGrades.filter((stu) => stu.id === obj.id);
      const { grade = 'N/A' } = findIdStudent.length > 0 ? findIdStudent[0] : {};
      return { ...obj, grade };
    });
  }
  return [];
}
