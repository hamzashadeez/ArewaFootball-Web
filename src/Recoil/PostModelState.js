import { atom } from "recoil";

export const show = atom({
    key: 'show', // unique ID (with respect to other atoms/selectors)
    default:false, // default value (aka initial value)
  });