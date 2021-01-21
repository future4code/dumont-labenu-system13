
export type Mission ={
   
    name:string,
    start_date:string,
    end_date:string,
    type:Type,
    module?:Modules
}

export enum Modules  {
  
    UM = 1,
    DOIS=2,
    TRÊS=3,
    QUATRO=4,
    CINCO=5,
    SEIS=6,
    SETE=7,
    UNDEFINED="undefined"
}


export enum Type  {
    INTEGRAL = "Integral",
    NOTURNO = "Noturno"
}



