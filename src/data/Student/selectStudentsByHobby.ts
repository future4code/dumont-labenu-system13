import { connection } from '../../index';

export default async function selectStudentsByHobby(): Promise<any> {
    const result = await connection.raw(`
      SELECT STUDENT.id, STUDENT.name, STUDENT.email, STUDENT.birthDate, STUDENT_HOBBY.hobby_id
      FROM STUDENT
      JOIN STUDENT_HOBBY ON STUDENT.id = STUDENT_HOBBY.student_id
      ORDER BY STUDENT_HOBBY.hobby_id;
    `);
 
    return result[0];
 };