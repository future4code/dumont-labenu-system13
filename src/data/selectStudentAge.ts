import { connection } from '../index';
import dayjs from 'dayjs';

export default async function selectStudentAge(id: number):Promise<any> {
    let result = await connection.raw(`
        SELECT birthDate FROM STUDENT WHERE id = ${id}
    `);


    console.log(result[0][0].birthDate)

    result = dayjs(result[0][0].birthDate).format('DD/MM/YYYY')
    console.log(result)

    return result;
}