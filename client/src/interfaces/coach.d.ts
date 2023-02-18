export interface Coach {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    clients: Array;
}

export interface CoachInfoCardProps {
    coach: Coach;
    client: Client;
    onSave: (updatedCoach: Coach) => Promise<void>;
}