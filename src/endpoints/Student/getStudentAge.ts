import { Request, Response } from 'express';
import selectStudentAge from '../../data/Student/selectStudentAge';

export default async function getStudentAge(req: Request, res: Response):Promise<any> {
    try {
        const { id } = req.params;
        
        if (!id) {
            throw new Error("Insira o id do estudante.");
        };

        const studentAge = await selectStudentAge(Number(id));
        
        if (!studentAge.length) {
            res.statusCode = 404;
            throw new Error("Estudante não encontrado.");
        };

        res.status(200).send(studentAge);
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    };
};