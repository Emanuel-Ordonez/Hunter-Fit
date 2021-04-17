import { DateService } from "../../date/date.service";

export interface Workout {
    workoutType: string;
    totalWorkoutTime: number; 
    workoutDate: DateService;
    workoutNotes: string;
}
