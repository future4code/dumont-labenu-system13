import { Request, Response } from 'express';
import selectStudentAge from '../data/selectStudentAge';

export default async function getStudentAge(req: Request, res: Response):Promise<any> {
    try {
        const { id } = req.body;
        
        const studentAge = await selectStudentAge(id);
        
        if (!studentAge.length) {
            res.statusCode = 404;
            throw new Error("Estudante não encontrado.");
        }

        res.status(200).send(studentAge);
    } catch (error) {
        res.send(error.message || error.sqlMessage);
    }
}


// app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
//        const actor = await getActorById(req.params.id);
 
//        if (!actor) {
//           res.statusCode = 404
//           throw new Error("No actor found")
//        }
//        console.log(req.params.id)
       
//        res.status(200).send(actor)
//     } catch (error) {
//        console.log(req.params.id)
//        res.send(error.message)
//     }
//  });