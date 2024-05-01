import { createContext, useState } from "react";
import FetchList from "@/interfaces/FetchList";
import ChildrenInterface from "@/interfaces/ChildrenInterface";
import ContextInterface from "@/interfaces/ContextInterface";

export const ListContext = createContext<ContextInterface>({
  list: [],
  setList: () => {},
  description: "",
  setDescription: () => {},
  priority: "",
  setPriority: () => {}
}) 

export default function ListContextProvider({ children }: ChildrenInterface) {
  const [list, setList] = useState<FetchList[]>([])
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("")

  const listOperation = {
    list,
    setList,
    description,
    setDescription,
    priority,
    setPriority
  }

  return (
    <ListContext.Provider value={listOperation}>
      { children }
    </ListContext.Provider>
  )
}