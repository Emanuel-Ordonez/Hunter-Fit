import { IRepSetWl } from "./IRepSet-weightlifting";
import { Workout } from "./workout";

export interface WeightLiftingWorkout extends Workout{
    //repSet
    totalRepSets: IRepSetWl[];
}