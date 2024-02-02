import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const HeroSection = () => {
    return (
        <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lb:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Mateus Bertazzo</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">
                    Sou um Desenvolvedor Web Full Stack com uma forte inclinação para o Backend, 
                    atualmente embarcado na jornada acadêmica rumo ao Bacharelado em Engenharia de Software.
                    </p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <TechBadge name="React" />
                        
                        ))}
                    </div>

                    <div>
                        Contato
                    </div>

                </div>

                <div>
                <Image
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
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