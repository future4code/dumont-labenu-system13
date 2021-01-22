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
    
    console.log(result);

    if (result[0].length) {
        const student_id = result[0].id;

        // const hobbies = await connection.raw(`
        // ${hobbies.map(hobby => {
        //     `INSERT HOBBY (name) VALUES (
        //         ${hobby}
        //     )`
        // })}
        // `)

        // if (hobbies[0].length) {
        //     const student_id = result[0].id;

            // await connection.raw(`
            // ${hobbies.map(hobby => {
            //     `INSERT INTO STUDENT_HOBBY (student_id, hobby_id) VALUES (
            //         ${student_id},
            //         ${hobby_id}
            //     )`
            // })}
            // `)
        // }
        
    }
    
            
    // return result[0][0];
}