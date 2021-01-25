import { Request, Response } from 'express';
import insertStudentHobby from "../../data/Student/insertStudentHobby";

export default async function addStudentHobby(req: Request, res: Response): Promise<void> {
    try {
        const { student_id, hobby_id, hobby } = req.body;

        if (!student_id || !hobby_id || !hobby) {
            throw new Error("Insira o hobby, o id do estudante e do hobby.");
        };
        
        const result = await insertStudentHobby(Number(student_id), Number(hobby_id), hobby);
        
        res.status(200).send(result);
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    };
};