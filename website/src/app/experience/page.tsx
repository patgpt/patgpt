import { experiences } from "#site/content";
import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardBody, CardTitle } from "@/components/atoms";
import { notFound } from "next/navigation";


// TODO: Animated Timeline of Experiences, clickable cards leading to detailed pages.

export default function ExperiencePage() {
  const sortedExperiences = experiences
    .filter((exp) => exp.published !== false)
    .sort((a, b) => {
      const dateA = a.current ? new Date() : new Date(a.dateTo || a.dateFrom);
      const dateB = b.current ? new Date() : new Date(b.dateTo || b.dateFrom);
      return dateB.getTime() - dateA.getTime();
    });

  if (sortedExperiences.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Experience</h1>
        <p className="text-center text-base-content/70">No experience entries yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Experience</h1>
      <div className="space-y-6">
        {sortedExperiences.map((experience, index) => (
          <Link key={experience.slug} href={`/experience/${experience.slugAsParams}`}>
            <Card className="hover:shadow-2xl transition-shadow">
              <CardBody>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{experience.position}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{experience.company}</p>
                    <p className="text-sm text-base-content/70">
                      {new Date(experience.dateFrom).toLocaleDateString()} -{" "}
                      {experience.current ? "Present" : new Date(experience.dateTo!).toLocaleDateString()}
                    </p>
                  </div>
                  {experience.companyLogo && (
                    <img src={experience.companyLogo} alt={experience.company} className="w-12 h-12 rounded" />
                  )}
                </div>
                {experience.excerpt && (
                  <p className="mt-4 text-base-content/80">{experience.excerpt}</p>
                )}
                {experience.tags && experience.tags.length > 0 && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {experience.tags.map((tag) => (
                      <span key={tag} className="badge badge-outline">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
