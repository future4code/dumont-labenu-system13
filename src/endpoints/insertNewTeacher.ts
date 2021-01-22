import { Request, Response } from "express";
import selectNewTeacher from '../data/selectNewTeacher';
import { Teacher } from "../types/types";

export const insertNewTeacher = async(req: Request,res: Response): Promise<void> =>{
    let errorCode : number = 400
    try {
      const {name, email, birthdate, mission_id} = req.body 
      
      if(!name || !email || !birthdate || !mission_id){
          errorCode = 422
          throw new Error("Parametros inválidos")
      }

      const newTeacher: Teacher = {
          name: name,
          email: email,
          birthdate: birthdate,
          mission_id: mission_id,
      }; 

      await selectNewTeacher(newTeacher)

      res.statusMessage = "Professor adicionado com sucesso!"
      res.status(200).send(newTeacher)

       
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
 }