export interface iClient {
    firstname: string;
    lastname: string;
    phonenumber: string;
    email: string;
    weight:string;
    weightgoal: string;
    workoutplan: [string];
}

export interface clientPost {
    id: number;
    createdAt: Date;
    status: "positive" | "negative" | "invisible";
    meal: string;
    calorie: string;
    workout: string;
    goalHit: boolean
}