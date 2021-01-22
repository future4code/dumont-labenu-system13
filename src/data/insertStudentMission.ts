import knex from 'knex';
import { connection } from '../index';

export default async function insertStudent(mission_id: string, student_id: string):Promise<void> {
    await connection.raw(`
        UPDATE STUDENT
        SET mission_id = ${mission_id}
        WHERE id = ${student_id}
    `)
}