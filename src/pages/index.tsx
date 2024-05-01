import Form from "@/components/Form";
import SectionChecked from "@/components/SectionChecked";
import SectionList from "@/components/SectionList";
import { ListContext } from "@/context/ListContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { list, setList } = useContext(ListContext)

  useEffect(() => {
    fetch("http://localhost:3000/lista")
      .then((data) => data.json())
      .then((data) => setList(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list])


  return (
    <main className="h-modal w-1/3 bg-modal rounded-3xl flex flex-col items-center py-12 px-12 gap-8">
      <Form />
      <SectionList />
      <SectionChecked />
    </main>
  );
}
