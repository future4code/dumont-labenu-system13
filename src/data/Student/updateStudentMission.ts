import { connection } from '../../index';

export default async function updateStudentMission(student_id: number, mission_id: number): Promise<void> {
    const result = await connection.raw(`
        UPDATE STUDENT
        SET mission_id = ${mission_id}
        WHERE id = ${student_id}
    `);
    
    return result[0][0];
};