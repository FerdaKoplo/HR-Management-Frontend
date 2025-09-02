export interface Employee {
    id : number
    name : string
    department_id : number
    job_title_id : number
    department : {
        id : number
        name : string
        manager_id? : number | null
        manager? : Employee | null
    } 
    job_title : {
        id : number
        title : string
    }
}