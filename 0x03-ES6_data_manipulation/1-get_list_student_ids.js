export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) {
    return arrayOfObjects.map((obj) => obj.id);
  }

  return [];
}
