import { connection } from '../../index';

export default async function deleteTeacherMission(teacher_id: number): Promise<void> {
    const result = await connection.raw(`
        UPDATE TEACHER
        SET mission_id = null
        WHERE id = ${teacher_id};
    `);
    
    return result[0][0];
};