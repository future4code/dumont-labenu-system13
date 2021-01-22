export type Teacher = {
    id: number,
    name: string,
    email: string,
    birthdate: string,
    mission_id: number
}

export type TeacherSpeciality = {
    teacher_id: number,
    speciality_id: number
}