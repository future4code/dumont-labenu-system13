import insertStudentMission from "../../data/Student/insertStudentMission";
import { Request, Response } from 'express';

export default async function createStudent(req: Request, res: Response): Promise<void> {
    try {
        const { mission_id, student_id } = req.body;

        if (!mission_id || !student_id) {
            throw new Error("Insira um id de missão e um id de estudante")
        }

        const result: any = await insertStudentMission(mission_id, student_id);

        if (!result.changedRows) {
            throw new Error("Id de missão ou id de estudante inválido.")
        }

        res.status(200).send(result);
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    }
}