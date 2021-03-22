import { IRepSet } from "./IRepSet";

export interface Workout {

    // workoutType: string;
    totalWorkoutTime: string; 
    workoutDate: string;
    totalRepSets: IRepSet[];
    workoutNotes: string;
}
