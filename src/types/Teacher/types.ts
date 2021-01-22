export type Teacher = {

    name: string,
    email: string,
    birthdate: string,
    mission_id?: number | null
}

export type TeacherSpeciality = {
    teacher_id: number,
    speciality_id: number
}