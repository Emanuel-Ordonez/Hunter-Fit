import { DateService } from "../../date/date.service";

export interface IGoal {
    goalSetDate: DateService;
    goalMetDate: DateService;
    goalDetails: string;
}