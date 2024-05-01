import { SectionStyle } from "@/styles/SectionStyle"
import { useContext } from "react";
import { ListContext } from "@/context/ListContext";

export default function SectionChecked() {
  const { list } = useContext(ListContext)

  return (
    <SectionStyle>
      <h1>Done - {list.filter((item) => item.done == 1).length}</h1>
      <ul>
        {list.filter((item) => item.done == 1).map(({id, description, done}) => (
          <li key={id} className="done">{description}</li>
        ))}
      </ul>
    </SectionStyle>
  )
}