import { connection } from '../../index';

export default async function deleteStudent(student_id: number): Promise<void> {
    await connection.raw(`
        DELETE FROM STUDENT_HOBBY
        WHERE student_id = ${student_id};
    `);

    const result = await connection.raw(`
        DELETE FROM STUDENT
        WHERE id = ${student_id};
    `);
    
    return result[0][0];
};