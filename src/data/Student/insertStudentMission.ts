import { connection } from '../../index';

export default async function insertStudentMission(mission_id: number, student_id: number): Promise<void> {
    const result = await connection.raw(`
        UPDATE STUDENT
        SET mission_id = ${mission_id}
        WHERE id = ${student_id}
    `);

    return result;
};