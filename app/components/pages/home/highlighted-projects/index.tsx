import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"


export const HighlightedProjects = () => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="Destaques" title="Projeto em Destaque"/>
            <HorizontalDivider className="mb-16"/>

            <div>
                <ProjectCard />
            </div>
        </section>

        
    )
}