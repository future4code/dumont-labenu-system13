import insertStudentMission from "../data/insertStudentMission";
import { Request, Response } from 'express';

export default async function createStudent(req: Request, res: Response): Promise<void> {
    try {
        const { mission_id, student_id } = req.body;
        const result = await insertStudentMission(mission_id, student_id);

        res.status(200).send(result);
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage);
    }
}