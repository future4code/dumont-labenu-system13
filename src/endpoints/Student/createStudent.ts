import insertStudent from "../../data/Student/insertStudent";
import { Request, Response } from 'express';
import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

export default async function createStudent(req: Request, res: Response): Promise<void> {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            throw new Error("Insira name e email")
        }

        const birthDate: string = dayjs(req.body.birthDate, 'DD/MM/YYYY').format('YYYY/MM/DD')

        await insertStudent(name, email, birthDate);

        res.status(200).send("Estudante criado com sucesso");
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    }
}