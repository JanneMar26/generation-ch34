
///let student1Courses = ['Math', 'English', 'Programming'];
//let student2Courses = ['Geography', 'Spanish', 'Programming'];
//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

const student1Courses = ['Math', 'English', 'Programming']; /*Se definen los aarreglos de los estudiantes*/
const student2Courses = ['Geography', 'Spanish', 'Programming'];
function comonCourses(student1Courses,student2Courses){  //Se hace una función y llama al metodo filter parq comparar las materias de los dos estudiantes
  return student1Courses.filter(element => student2Courses.includes(element)); //Función flecha utilizada para la comparación
}

console.log(comonCourses(student1Courses, student2Courses)); //Se imprime en consola los cursos en comun
