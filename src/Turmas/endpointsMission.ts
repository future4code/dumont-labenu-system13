import { Request, Response } from "express";
import { Mission, Modules} from "./typeMission"
import { selectMission,selectAllMission } from "./dataMission"



export const getAllMission = async(req: Request,res: Response): Promise<void> =>{
    try {
       
       const mission = await selectAllMission()
 
       if(!mission.length){
          res.statusCode = 404
          throw new Error("No mission found")
       }
 
       res.status(200).send(mission)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

export const postMission = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {

        const {name, start_date, end_date, type, module}=req.body
        
        let editName = name
        let editModule: Modules|undefined = module 
        if(type ==="Noturna"){
            editName = name as string + "-na-night"
        }

        if(!name|| !start_date || !end_date || !type){
            errorCode = 422
            throw new Error("Para criar uma nova turma você deve preencher os campos 'name', 'start_date', 'end_date' e 'type'. ;)")
        }

        console.log(new Date(start_date).getTime() , Date.now())
        
        if( new Date(start_date).getTime() > Date.now()){
            editModule = undefined
            
        }
        
        const mission: Mission={
            name:editName,
            start_date:start_date,
            end_date:end_date,
            type:type,
            module:editModule
        } 
        await selectMission(mission)

       
        res.statusMessage = "Turma criada com sucesso! =)"
        

        res.status(200).send(mission)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
