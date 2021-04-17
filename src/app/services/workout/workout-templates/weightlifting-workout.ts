import { IRepSetWl } from "./set-interface/IRepSet-weightlifting";
import { Workout } from "./workout";

export interface WeightLiftingWorkout extends Workout{
    //repSet
    totalWRepSets: IRepSetWl[];
}