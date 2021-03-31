import { IRepSetE } from "./IRepSet-extreme";
import { Workout } from "./workout";

export interface ExtremeWorkout extends Workout{
    //repSet
    totalRepSets: IRepSetE[];
}