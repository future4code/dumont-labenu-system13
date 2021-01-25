import { connection } from '../../index';

export default async function selectStudentsFromMission(mission_id: number): Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM STUDENT
       WHERE mission_id = ${mission_id}
    `);
 
    return result[0];
 };