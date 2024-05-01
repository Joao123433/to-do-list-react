import { FormStyle } from "@/styles/FormStyle";
import plus from "../../public/plus.svg";
import Image from "next/image";
import { useContext } from "react";
import { ListContext } from "@/context/ListContext";


export default function Form() {
  const { description, setDescription, setList } = useContext(ListContext)

  async function handleSubmit(ev: { preventDefault: () => void; }) {
    ev.preventDefault()
    const itemList = {
      description: description,
      dateRegister: new Date(),
      done: 0
    }

    const response = await fetch("http://localhost:3000/lista", {
      method: "POST",
      body: JSON.stringify(itemList),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const currentItem = await response.json()

    setList((prevState) => [currentItem, ...prevState])
    setDescription("")
  }

  return (
    <FormStyle>
      <div>
        <input 
          type="text" 
          placeholder="Add a new task"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
          required
        />
      </div>
      <button onClick={handleSubmit}>
        <Image src={plus} alt="add task"/>
      </button>
    </FormStyle>
  )
}
