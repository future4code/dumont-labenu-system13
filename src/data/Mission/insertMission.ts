import {connection} from "../../index"
import {Mission} from "../../types/Mission/typeMission"





export async function insertMission(mission:Mission):Promise<any> {
  
    const result = await connection.raw(`
    INSERT INTO MISSION (name, start_date, end_date, type, module) 
    VALUES ('${mission.name}','${mission.start_date}','${mission.end_date}', '${mission.type}', '${mission.module}');
    
 `)
   
    return result[0]
 }