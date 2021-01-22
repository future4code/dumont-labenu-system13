import insertStudent from "../data/insertStudent";
import { Request, Response } from 'express';

export default async function createStudent(req: Request, res: Response): Promise<void> {
    try {
        const { name, email } = req.body;
        const birthDate = req.body.birthDate.split("/").reverse().join("/");
        
        await insertStudent(name, email, birthDate);

        res.status(200).send("Estudante criado com sucesso");
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage);
    }
}