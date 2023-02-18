export interface iClient {
    firstname: string;
    lastname: string;
    phonenumber: string;
    birthday: string;
    sex: string;
    email: string;
    weight:string;
    height: string;
    goalType: string;
    goaltime: string;
    workoutDays: string;
    calorieGoal: string;
    workoutplan: [string];
    clientImage: string;
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