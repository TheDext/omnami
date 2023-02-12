import { combineReducers, configureStore } from "@reduxjs/toolkit";
import comboReducer from "./combo";
import pizzaReducer from "./pizza";
import rollsReducer from "./rolls";
import setsReducer from "./sets";
import snacksReducer from "./snacks";
import usersReducer from "./users";

const rootReducer = combineReducers({
    users: usersReducer,
    combo: comboReducer,
    pizza: pizzaReducer,
    rolls: rollsReducer,
    sets: setsReducer,
    snacks: snacksReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
