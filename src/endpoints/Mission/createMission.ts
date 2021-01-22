import { Request, Response } from "express";
import { Mission, Modules} from "../../types/Mission/typeMission"
import { insertMission } from "../../data/Mission/insertMission"
import dayjs from 'dayjs';


var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


export const createMission = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {

        const {name, type, module}=req.body
        
        let editName = name
        let editModule: Modules|undefined = module 
        let editStartDate = dayjs(req.body.start_date, 'DD/MM/YYYY').format('YYYY/MM/DD')
        let editEndDate = dayjs(req.body.end_date, 'DD/MM/YYYY').format('YYYY/MM/DD')


        console.log(editStartDate, editEndDate)

        if(type ==="Noturna"){
            editName = name as string + "-na-night"
        }

        if(!name|| !editStartDate || !editEndDate || !type){
            errorCode = 422
            throw new Error("Para criar uma nova turma você deve preencher os campos 'name', 'start_date', 'end_date' e 'type'. ;)")
        }

      
        
        if( new Date(editStartDate).getTime() > Date.now()){
            editModule = undefined
            
        }
        
        const mission: Mission={
            name:editName,
            start_date:editStartDate,
            end_date:editEndDate,
            type:type,
            module:editModule
        } 
        await insertMission(mission)

       
        res.statusMessage = "Turma criada com sucesso! =)"
        

        res.status(200).send(mission)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
