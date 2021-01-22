import {connection} from "../../index"



export async function selectAllMission():Promise<any> {
    const result = await connection.raw(`
       SELECT *
       FROM MISSION
    `)
 
    return result[0]
 }
