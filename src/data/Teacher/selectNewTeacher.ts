import { connection } from '../../index'
import { Teacher } from '../../types/Teacher/types'


export default async function selectNewTeacher(teacher : Teacher):Promise<any> {
    const result = await connection.raw(`
       INSERT INTO TEACHER  ( name, email, birthdate, mission_id)
       VALUES ('${teacher.name}', '${teacher.email}', '${teacher.birthdate}', '${teacher.mission_id}')
    `)
 
    return result[0]
 }