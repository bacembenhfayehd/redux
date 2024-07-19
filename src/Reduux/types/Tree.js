
import { combineReducers } from "redux";
import { reducer } from "../reducer/Compteur";
import { second } from "../reducer/True";

export const Tree = combineReducers({
    Fir :reducer,
    Sec : second
})