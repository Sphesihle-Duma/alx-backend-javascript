export default function getStudentsByLocation(arrayOfStudents, city) {
  if (Array.isArray(arrayOfStudents)) {
    return arrayOfStudents.filter((student) => student.location === city);
  }
  return [];
}
