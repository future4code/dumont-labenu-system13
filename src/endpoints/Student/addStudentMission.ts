import { Request, Response } from 'express';
import insertStudentMission from "../../data/Student/insertStudentMission";

export default async function addStudentMission(req: Request, res: Response): Promise<void> {
    try {
        const { mission_id, student_id } = req.body;

        if (!mission_id || !student_id) {
            throw new Error("Insira o id de missão e o id de estudante.");
        };

        const result: any = await insertStudentMission(Number(mission_id), Number(student_id));

        if (!result.changedRows) {
            throw new Error("Id da missão ou id do estudante inválido.")
        };

        res.status(200).send(result);
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    };
};