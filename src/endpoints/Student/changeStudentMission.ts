import { Request, Response } from 'express';
import updateStudentMission from "../../data/Student/updateStudentMission";

export default async function changeStudentMission(req: Request, res: Response): Promise<void> {
    try {
        const { student_id, mission_id } = req.body;

        if (!student_id || !mission_id) {
            throw new Error("Insira o id do estudante e da missão.");
        };

        await updateStudentMission(Number(student_id), Number(mission_id));

        res.status(200).send("Estudante criado com sucesso.");
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    };
};