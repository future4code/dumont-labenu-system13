import { Request, Response } from "express";
import selectNewTeacher from '../../data/Teacher/selectNewTeacher';
import { Teacher } from "../../types/Teacher/types";
import dayjs from 'dayjs';


var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


export const insertNewTeacher = async(req: Request,res: Response): Promise<void> =>{
    let errorCode : number = 400
    try {
      const {name, email, birthdate, mission_id} = req.body 
      let editBirthDate = dayjs(req.body.birthdate, 'DD/MM/YYYY').format('YYYY/MM/DD')

      if(!name || !email || !birthdate){
          errorCode = 422
          throw new Error("Parametros inválidos")
      }

      const newTeacher: Teacher = {
          name: name,
          email: email, 
          birthdate: editBirthDate,
          mission_id:mission_id 
      }; 

      await selectNewTeacher(newTeacher)

      res.statusMessage = "Professor adicionado com sucesso!"
      res.status(200).send(newTeacher)
    } catch (error) {
        res.send(error.message || error.sqlMessage)

    }
 }