import { Request, Response } from 'express';
import deleteStudent from "../../data/Student/deleteStudent";

export default async function removeStudent(req: Request, res: Response): Promise<void> {
    try {
        const { student_id } = req.params;

        if (!student_id) {
            throw new Error("Insira o id do estudante.");
        };

        await deleteStudent(Number(student_id));

        res.status(200).send("Estudante criado com sucesso.");
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    };
};