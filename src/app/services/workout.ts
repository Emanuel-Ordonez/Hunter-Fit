import { DateService } from "./date/date.service";

export interface Workout {
    // workoutType: string;
    totalWorkoutTime: number; 
    workoutDate: DateService;
    //totalRepSets: IRepSet[];
    workoutNotes: string;
}
