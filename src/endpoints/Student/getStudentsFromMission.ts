import { Request, Response } from "express";
import selectStudentsFromMission from '../../data/Student/selectStudentsFromMission'

export default async function getStudentsFromMission(req: Request, res: Response): Promise<void> {
    try {
       const { mission_id } = req.query;
       
       const users = await selectStudentsFromMission(Number(mission_id));
 
       if (!users.length){
          res.statusCode = 404;
          throw new Error("Nenhum estudante foi encontrado.");
       };
 
       res.status(200).send(users);
       
    } catch (error) {
       res.send(error.message || error.sqlMessage);
    };
 };