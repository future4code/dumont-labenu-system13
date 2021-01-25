import { Request, Response } from "express";
import selectAllUsers from '../../data/Student/selectAllUsers'

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers();
 
       if(!users.length){
          res.statusCode = 404;
          throw new Error("Nenhum professor foi encontrado.");
       };
 
       res.status(200).send(users);
       
    } catch (error) {
       res.send(error.message || error.sqlMessage)
    };
 };