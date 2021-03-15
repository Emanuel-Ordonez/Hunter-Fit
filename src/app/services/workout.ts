import { IRepSet } from "./IRepSet";

export interface Workout {

    workoutType: string;
    totalWorkoutTime: number; 
    totalRepSets: IRepSet[];
}
