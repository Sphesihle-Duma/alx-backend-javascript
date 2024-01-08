export default function getStudentIdsSum(arrayOfStudents) {
  if (Array.isArray(arrayOfStudents)) {
    return arrayOfStudents.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
