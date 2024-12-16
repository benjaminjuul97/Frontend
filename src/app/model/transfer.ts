export interface Transfer {
    id: number;
    fromclubid: number;
    toclubid: number;
    transferdate: Date;
    transferfee: number;
    playerid: number;
    loan: boolean;
}