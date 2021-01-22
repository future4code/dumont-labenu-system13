import {connection} from "../index"
import {Mission} from "./typeMission"


export async function selectAllMission():Promise<any> {
    const result = await connection.raw(`
       SELECT *
       FROM MISSION
    `)
 
    return result[0]
 }


export async function selectMission(mission:Mission):Promise<any> {
  
    const result = await connection.raw(`
    INSERT INTO MISSION (name, start_date, end_date, type, module) 
    VALUES ('${mission.name}','${mission.start_date}','${mission.end_date}', '${mission.type}', '${mission.module}');
    
 `)
 
    return result[0]
 }