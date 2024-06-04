import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { revalidatePath } from "next/cache";



interface ICourses {
  id:number,
  name:string,
  description:string
}
export default async function ListCourses() {
  const courses = await list()
  async function list(){
    revalidatePath("/admin/courses")
    const response = await fetch("https://server20241.vercel.app/courses");
      return response.json();

  }

  return (
    <Table>
      <TableCaption>Lista de cursos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Descrição</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((item:ICourses) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>

          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
