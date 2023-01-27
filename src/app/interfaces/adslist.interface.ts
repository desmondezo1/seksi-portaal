import { AdsInterface } from "./ads.interface";

export interface AdsListInterface {
    "requestTime":number;
    "length": number;
    "list": AdsInterface[];
}