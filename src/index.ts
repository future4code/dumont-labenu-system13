import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createStudent from './endpoints/createStudent';
import addStudentMission from "./endpoints/addStudentMission";
import getStudentAge from "./endpoints/getStudentAge";


import { getAllUsers } from "./endpoints/getAllUsers";
import { insertNewTeacher } from "./endpoints/insertNewTeacher";


import{postMission,getAllMission}from"./Turmas/endpointsMission";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

app.post("/student", createStudent);
app.put("/student/mission", addStudentMission);
app.get("/student/age", getStudentAge);


app.get("/teachers/all", getAllUsers);

app.post("/teacher/new", insertNewTeacher);

app.get('/mission/all', getAllMission);

app.post('/mission/create', postMission);



const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});