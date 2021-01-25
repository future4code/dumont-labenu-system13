import { Request, Response } from "express";
import selectStudentsByHobby from '../../data/Student/selectStudentsByHobby'

export default async function getStudentsByHobby(req: Request, res: Response): Promise<void> {
    try {
       const users = await selectStudentsByHobby();
 
       if(!users.length){
          res.statusCode = 404;
          throw new Error("Nenhum estudante foi encontrado.");
       };
 
       res.status(200).send(users);
       
    } catch (error) {
       res.send(error.message || error.sqlMessage);
    };
 };