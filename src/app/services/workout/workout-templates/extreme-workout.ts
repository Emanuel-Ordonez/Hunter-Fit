import { IRepSetE } from "./set-interface/IRepSet-extreme";
import { Workout } from "./workout";

export interface ExtremeWorkout extends Workout{
    //repSet
    totalERepSets: IRepSetE[];
}