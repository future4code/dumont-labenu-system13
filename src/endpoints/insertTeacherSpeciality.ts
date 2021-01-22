import { Request, Response } from "express";
import selectNewSpeciality from '../data/selectNewSpeciality';
import { TeacherSpeciality } from "../types/types";

export const insertTeacherSpeciality = async(req: Request,res: Response): Promise<void> =>{
    let errorCode : number = 400
    try {
      const {teacher_id, speciality_id} = req.body 
      
      if(!teacher_id || !speciality_id ){
          errorCode = 422
          throw new Error("Parametros inválidos")
      }

      const newTeacherSpeciality: TeacherSpeciality = {
          teacher_id: teacher_id,
          speciality_id: speciality_id,
      }; 

      await selectNewSpeciality(newTeacherSpeciality)

      res.statusMessage = "Professor adicionado com sucesso!"
      res.status(200).send(newTeacherSpeciality)

       
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
 }