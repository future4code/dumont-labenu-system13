import knex from 'knex';
import { connection } from '../../index';

export default async function insertStudentHobby(student_id: number, hobby_id: number, hobby: string):Promise<void> {
    await connection.raw(`
        INSERT HOBBY (name) VALUES (
            "${hobby}"
            )
        `)
        
    const result = await connection.raw(`
        INSERT INTO STUDENT_HOBBY (student_id, hobby_id) VALUES (
            "${student_id}",
            "${hobby_id}"
        )
    `)

    return result[0][0];
}