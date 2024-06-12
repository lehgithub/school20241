"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Nome precisa tem no mínimo 2 caracteres."
    }),

    email: z.string().email({ message: "Digite o email correto" }),
})

export default function SaveTeacher() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "Bianchini",
            email: "bianchini@hotmail.com",
        },
    })

    async function onSubmit(teacher: z.infer<typeof FormSchema>) {
        console.log(JSON.stringify(teacher))
        const requestOption= {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(teacher)
        }
        const response = await fetch("https://server20241-liart.vercel.app/teachers", requestOption)
        const teacher1 = await response.json();
        form.reset();
        alert("Professor Cadastrado com Sucesso!")


    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite nome do Professor" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o email do Professor" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
    