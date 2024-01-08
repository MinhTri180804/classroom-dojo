import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const classesSelector = (state) => state.ClassSlice.classes;

export const selectorClassActive = createSelector(classesSelector, (classes) => {
  return classes.filter((classItem) => classItem.status == "active");
});

export const selectorClassInactive = createSelector(classesSelector, (classes) => {
  return classes.filter((classItem) => classItem.status == "inactive");
});
