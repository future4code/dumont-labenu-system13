import { connection } from '../index'

export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, birthdate
       FROM TEACHER;
    `)
 
    return result[0]
 }