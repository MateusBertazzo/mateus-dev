'use client'

import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb"

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/MateusBertazzo',
        icon: <TbBrandGithub />,
    },
    {
        url: 'https://www.linkedin.com/in/mateus-bertazzo-dev/',
        icon: <TbBrandLinkedin />,
    }
]

export const HeroSection = () => {

    const handleContact = () => {
        const contactSection = document.querySelector('#contact')

        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lb:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Mateus Bertazzo</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">
                    Sou um Desenvolvedor de Software Web Full Stack com uma forte inclinação para o Backend, 
                    atualmente cursando Bacharelado em Engenharia de Software.
                    </p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        <TechBadge name="Desenvolvedor de Software" />
                        <TechBadge name="Rest API" />
                        <TechBadge name="Git e GitHub" />
                        <TechBadge name="Banco de Dados" />
                        <TechBadge name="Desenvolvedor de Sistemas" />
                        <TechBadge name="Unix e Bash" />
                        <TechBadge name="Testes Unitários" />
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button 
                            className="w-max shadow-button"
                            onClick={handleContact}
                            >
                                Entre em Contato
                                <HiArrowNarrowRight />
                        </Button>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a 
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                    >
                                        {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div>
                <Image
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover border-2"
                    width={420}
                    height={404}
                    src="/images/profile-pic.png"
                    alt="my picture"
                />
                </div>
            </div>
        </section>
    )
}