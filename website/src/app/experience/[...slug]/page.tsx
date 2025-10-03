import { experiences } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";

interface ExperiencePageProps {
  params: {
    slug: string[];
  };
}

async function getExperienceFromParams(params: ExperiencePageProps["params"]) {
  const slug = params?.slug?.join("/");
  const experience = experiences.find((exp) => exp.slugAsParams === slug);

  if (!experience) {
    return null;
  }

  return experience;
}

export async function generateStaticParams(): Promise<ExperiencePageProps["params"][]> {
  return experiences.map((experience) => ({
    slug: experience.slugAsParams.split("/"),
  }));
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const experience = await getExperienceFromParams(params);

  if (!experience) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{experience.position}</h1>
        <div className="text-xl text-primary mb-4">{experience.company}</div>
        <div className="text-base-content/70">
          {new Date(experience.dateFrom).toLocaleDateString()} -{" "}
          {experience.current ? "Present" : new Date(experience.dateTo!).toLocaleDateString()}
        </div>
        {experience.tags && experience.tags.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {experience.tags.map((tag) => (
              <span key={tag} className="badge badge-primary">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose lg:prose-xl max-w-none">
        <MDXContent code={experience.content} />
      </div>
    </article>
  );
}
