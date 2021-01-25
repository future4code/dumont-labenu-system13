import { Request, Response } from "express";
import selectTeachersFromMission from '../../data/Teacher/selectTeachersFromMission'

export default async function getTeachersFromMission(req: Request,res: Response): Promise<void> {
    try {
       const { mission_id } = req.query;
       
       const users = await selectTeachersFromMission(Number(mission_id));
 
       if(!users.length){
          res.statusCode = 404;
          throw new Error("Nenhum estudante foi encontrado.");
       };
 
       res.status(200).send(users);
       
    } catch (error) {
       res.send(error.message || error.sqlMessage);
    };
 };