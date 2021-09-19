import { createSelector } from "reselect";

const getStateMain = state => state.main;

export const getMainData = createSelector(
    getStateMain,
    (main) => main.sections
)