import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                    src={'/images/project1.jpeg'}
                    alt="Project Image"
                    width={420}
                    height={304}
                    className="object-cover rounded-lg lg:min-h-ful w-full h-[200px] sm:h-[300px]"
                />
            </div>
            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                        width={20}
                        height={20}
                        alt="icon project"
                        src={'/images/icons/project-title-icon.svg'} 
                    />
                    Project Personal Trainer
                </h3>

                <p className="text-gray-400 my-6">
                O Personal Trainer Assistant é uma aplicação web desenvolvida para auxiliar personal trainers no controle e acompanhamento dos 
                treinos de seus alunos. A plataforma oferece funcionalidades como o envio de treinos diários via WhatsApp, consulta do histórico 
                de treinos, sistema de login e cadastro, administração de treinos e uma galeria de fotos para visualizar a evolução dos alunos 
                também possui um Perfil de cada aluno, onde o mesmo pode realizar o cadastro com suas informações.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Java" />
                    <TechBadge name="Spring framework" />
                    <TechBadge name="JPA" />
                    <TechBadge name="MySQL" />
                    <TechBadge name="Jwt" />
                    <TechBadge name="Bcrypt" />
                </div>

                <Link href='/projects/personal-trainer-assistant'>
                    Ver Projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}