import { connection } from '../index'
import { TeacherSpeciality } from '../types/types'


export default async function selectNewTeacher(speciality : TeacherSpeciality):Promise<any> {
    const result = await connection.raw(`
        INSERT INTO TEACHER_SPECIALITY  ( teacher_id, speciality_id)
        VALUES ('${speciality.teacher_id}', '${speciality.speciality_id}')
    `)
 
    return result[0]
 }