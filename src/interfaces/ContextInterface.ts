import { Dispatch, SetStateAction } from "react";
import FetchList from "@/interfaces/FetchList";

export default interface ContextInterface {
  list: FetchList[];
  setList: Dispatch<SetStateAction<FetchList[]>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  priority: string;
  setPriority: Dispatch<SetStateAction<string>>;
}