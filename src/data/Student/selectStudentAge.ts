import { connection } from '../../index';
import dayjs from 'dayjs';

export default async function selectStudentAge(id: number):Promise<any> {
    let result = await connection.raw(`
        SELECT birthDate FROM STUDENT WHERE id = ${id}
    `);

    const studentAge = [{
        "studentAge": `${dayjs(result[0][0].birthDate).format('DD/MM/YYYY')}`
    }]
        
    return studentAge;
}