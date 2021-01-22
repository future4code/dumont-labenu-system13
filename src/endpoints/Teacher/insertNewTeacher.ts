import { Request, Response } from "express";
import selectNewTeacher from '../../data/Teacher/selectNewTeacher';
import { Teacher } from "../../types/Teacher/types";

export const insertNewTeacher = async(req: Request,res: Response): Promise<void> =>{
    let errorCode : number = 400
    try {
      const {name, email, birthdate, mission_id} = req.body 
      
      if(!name || !email || !birthdate || !mission_id){
          errorCode = 422
          throw new Error("Parametros inválidos")
      }

      const newTeacher: Teacher = {
          id: Date.now(),
          name: req.body.name as string,
          email: req.body.email as string,
          birthdate: req.body.date,
          mission_id: req.body.mission_id,
      }; 

      await selectNewTeacher(newTeacher)

      res.statusMessage = "Professor adicionado com sucesso!"
      res.status(200).send(newTeacher)

       
    } catch (error) {

    }
 }