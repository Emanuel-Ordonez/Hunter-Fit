import { DateService } from "./date/date.service";
import { IRepSet } from "./IRepSet";

export interface Workout {

    // workoutType: string;
    totalWorkoutTime: number; 
    workoutDate: DateService;
    totalRepSets: IRepSet[];
    workoutNotes: string;
}
