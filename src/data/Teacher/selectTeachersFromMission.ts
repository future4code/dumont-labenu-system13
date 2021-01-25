import { connection } from '../../index';

export default async function selectTeachersFromMission(mission_id: number): Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM TEACHER
       WHERE mission_id = ${mission_id}
    `);
 
    return result[0];
 };