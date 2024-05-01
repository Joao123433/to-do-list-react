import { SectionStyle } from "@/styles/SectionStyle"
import check from "../../public/check.svg";
import del from "../../public/del.svg";
import Image from "next/image";
import { useContext } from "react";
import { ListContext } from "@/context/ListContext";

export default function SectionList() {
  const { list } = useContext(ListContext)

  async function handleCheck(id: string) {
    const response = await fetch(`https://to-do-list-react-d1a8c59e7.vercel.app/api/${id}`);
    const currentItem = await response.json();
    const updatedItem = { ...currentItem, done: 1 };

    await fetch(`https://to-do-list-react-d1a8c59e7.vercel.app/api/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedItem),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  async function handleDelete(id: string) {
    await fetch(`https://to-do-list-react-d1a8c59e7.vercel.app/api/${id}`, {
      method: "DELETE"
    });
  }

  return (
    <SectionStyle>
      <h1>Tasks to do - {list.filter((item) => item.done == 0).length}</h1>
      <ul>
        {list.filter((item) => item.done == 0).map(({id, description}) => (
          <li key={id}>
            {description}
            <div>
              <button onClick={() => handleCheck(id)}>
                <Image src={check} alt="ckeck list"/>
              </button>
              <button onClick={() => handleDelete(id)}>
                <Image src={del} alt="ckeck list"/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </SectionStyle>
  )
}