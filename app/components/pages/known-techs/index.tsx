import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs, FaJava, FaDocker, FaReact } from "react-icons/fa";
import { SiSpringboot, SiSpringsecurity, SiHibernate, SiTypescript } from "react-icons/si";
import { DiMysql, DiJavascript1, DiMongodb } from "react-icons/di";
import { SectionTitle } from "../../section-title"
import { KnownTech } from "../known-techs/known-tech"

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="Competências" title="Conhecimentos"/>

            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                <KnownTech tech={
                    {
                        icon: <FaJava />,
                        name: "Java",
                        startDate: "2022-12-12",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <SiSpringboot />,
                        name: "Spring Boot",
                        startDate: "2022-12-12",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <SiSpringsecurity />,
                        name: "Spring Security",
                        startDate: "2022-12-12",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <SiHibernate />,
                        name: "Hibernate",
                        startDate: "2022-12-12",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <DiMysql />,
                        name: "MySQL / SQL Server",
                        startDate: "2022-12-12",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <DiJavascript1 />,
                        name: "JavaScript",
                        startDate: "2022-12-12",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <FaDocker />,
                        name: "Docker",
                        startDate: "2022-12-12",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <FaNodeJs />,
                        name: "Node.js",
                        startDate: "2022-12-12",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <SiTypescript />,
                        name: "TypeScript",
                        startDate: "2023-03-01",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <DiMongodb />,
                        name: "MongoDB",
                        startDate: "2023-03-01",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <FaReact />,
                        name: "React.js",
                        startDate: "2022-010-10",
                    }
                }/>
                <KnownTech tech={
                    {
                        icon: <TbBrandNextjs />,
                        name: "Next.js",
                        startDate: "2023-03-01",
                    }
                }/>
            </div>
        </section>
    )
}