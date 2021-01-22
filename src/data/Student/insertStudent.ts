import knex from 'knex';
import { connection } from '../../index';

export default async function insertStudent(name: string, email: string, birthDate: string):Promise<void> {
    const result = await connection.raw(`
        INSERT INTO STUDENT (name, email, birthDate) VALUES (
            "${name}",
            "${email}",
            "${birthDate}"
        )
    `)
    
    return result[0][0];
}