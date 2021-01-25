import { Request, Response } from 'express';
import deleteStudentMission from "../../data/Student/deleteStudentMission";

export default async function removeStudentMission(req: Request, res: Response): Promise<void> {
    try {
        const { student_id } = req.params;

        if (!student_id) {
            throw new Error("Insira o id da missão e o id do estudante.");
        };

        const result: any = await deleteStudentMission(Number(student_id));

        if (!result.changedRows) {
            throw new Error("Id da missão ou id do estudante inválido.");
        };

        res.status(200).send(result);
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    };
};