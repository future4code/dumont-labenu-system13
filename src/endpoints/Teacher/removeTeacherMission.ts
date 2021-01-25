import { Request, Response } from 'express';
import deleteTeacherMission from "../../data/Student/deleteTeacherMission";

export default async function removeTeacherMission(req: Request, res: Response): Promise<void> {
    try {
        const { teacher_id } = req.params;

        if (!teacher_id) {
            throw new Error("Insira o id do estudante.");
        };

        await deleteTeacherMission(Number(teacher_id));

        res.status(200).send("Estudante criado com sucesso.");
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    };
};