import { Request, Response } from "express";
import { selectAllMission } from "../../data/Mission/selectAllMission"



export const getAllMission = async(req: Request,res: Response): Promise<void> =>{
    try {
       
       const mission = await selectAllMission()
 
       if(!mission.length){
          res.statusCode = 404
          throw new Error("No mission found")
       }
 
       res.status(200).send(mission)
       
    } catch (error) {
       res.send(error.message || error.sqlMessage)
    }
 }