import { connection } from '../../index';

export default async function deleteStudentMission(student_id: number): Promise<void> {
    const result = await connection.raw(`
        UPDATE STUDENT
        SET mission_id = null
        WHERE id = ${student_id};
    `);
    
    return result[0][0];
};