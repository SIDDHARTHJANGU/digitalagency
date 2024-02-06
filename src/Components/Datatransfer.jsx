import { createContext } from "react";

export const Datatransfer = createContext();

export default function DataHelp({ children }) {
  const numbervalue = { name: "123" };
  const alpahvalue = { name: "abcdefghijklmnopqurstvwxyz" };
  const agevalue = { age: "19" };
  const value = { numbervalue, alpahvalue, agevalue };
  return (
    <Datatransfer.Provider value={value}>{children}</Datatransfer.Provider>
  );
}                                                   
