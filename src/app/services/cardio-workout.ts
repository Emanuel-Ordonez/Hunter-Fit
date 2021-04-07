import { Workout } from "./workout";

export interface CardioWorkout extends Workout{
    //distance
    distanceTraveled: number;
}