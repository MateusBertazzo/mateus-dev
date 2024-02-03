'use client'

import axios from 'axios'
import { SectionTitle } from "../section-title"
import { Button } from "../button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from 'react-hot-toast'

export const ContactForm = () => {

    const contactFormSchema = z.object({
        name: z.string().min(3).max(100),
        email: z.string().email(),
        message: z.string().min(1).max(500)
    })
    
    type ContactFormData = z.infer<typeof contactFormSchema>
    
    const { handleSubmit, register, reset, formState: { isSubmitting } } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })
    
    const onSubmit = async (data: ContactFormData) => {
        try {

            await axios.post('/api/contact', data)

            toast.success('Mensagem enviada com sucesso!')

            reset()

        } catch (error) {
            console.error(error)
            toast.error('Erro ao enviar mensagem')
        }
    }

    return (
        <section 
            className="py-16 px-6 md:py32 flex items-center justify-center bg-gray950"
            id="contact"
        >
            <div className="w-full max-w-[420px] mx-auto">
                <SectionTitle 
                    subtitle="Contato" 
                    title="Mande-me uma mensagem!" 
                    className="items-center text-center"
                />
                <form 
                    className="mt-12 w-full flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <input 
                        placeholder="Nome"
                        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
                        maxLength={100}
                        {...register('name')}
                    />
                     <input 
                        placeholder="E-mail"
                        type="email"
                        maxLength={100}
                        className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
                        {...register('email')}
                    />
                     <textarea
                        placeholder="Mensagem"
                        className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
                        maxLength={500}
                        {...register('message')}
                    />

                    <Button 
                        className=" w-max mx-auto mt-6 shadow-button"
                        disabled={isSubmitting}

                    >
                        Enviar mensagem
                        <HiArrowNarrowRight size={18} />
                    </Button>
                </form>

            </div>
        </section>
    )
}