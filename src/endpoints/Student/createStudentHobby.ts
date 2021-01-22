import insertStudentHobby from "../../data/Student/insertStudentHobby";
import { Request, Response } from 'express';

export default async function createStudentHobby(req: Request, res: Response): Promise<void> {
    try {
        const { student_id, hobby_id, hobby } = req.body;

        if (!student_id || !hobby_id) {
            throw new Error("Insira id de estudante e id de hobby")
        }
        
        const result = await insertStudentHobby(student_id, hobby_id, hobby);
        
        res.status(200).send(result);
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    }
}