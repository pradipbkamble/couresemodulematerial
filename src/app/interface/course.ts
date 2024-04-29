
export interface Icourcepay{
    payload:Icource[]
}




export interface Icource{
    id: number;
    description: string;
    iconUrl: string;
    courseListIcon: string;
    longDescription: string;
    category: "BEGINNER" | "ADVANCED";
    lessonsCount: number;
}

export interface IlessonsResp{
    payload : Ilessons[]
  }

  export interface Ilessons {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}