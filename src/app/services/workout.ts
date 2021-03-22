import { IRepSet } from "./IRepSet";

export interface Workout {

    workoutType: string;
    totalWorkoutTime: number; 
    workoutDate: string;
    totalRepSets: IRepSet[];
    workoutNotes: string;
}
