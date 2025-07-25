import React, { useState } from "react";
import GridLayout from "./GridLayout";
import SectionHeading from "./SectionHeading";
import skills from "../data/skills";
import Skill from "./Skill";
import AnimatedWrapper from "./ui/AnimatedWrapper";

// Define skill categories with elegant names
const skillCategories = [
  "All",
  "Cloud Platforms",
  "Infrastructure as Code",
  "Containers & Orchestration",
  "CI/CD & Automation",
  "Monitoring & Observability",
  "Data & Messaging",
  "Programming Languages",
  "Databases",
  "Web Technologies"
];

// Helper function to determine if a skill belongs to a category
const skillBelongsToCategory = (skill, category) => {
  if (category === "All") return true;
  
  const name = skill.name.toLowerCase();
  
  switch(category) {
    case "Cloud Platforms":
      return ["aws", "azure", "digitalocean"].some(cloud => name.includes(cloud));
    case "Infrastructure as Code":
      return ["terraform", "terragrunt", "serverless", "cdk"].some(iac => name.includes(iac));
    case "Containers & Orchestration":
      return ["docker", "kubernetes", "helm"].some(container => name.includes(container));
    case "CI/CD & Automation":
      return ["actions", "gitlab", "jenkins", "bitbucket", "ansible", "bash"].some(cicd => name.includes(cicd));
    case "Monitoring & Observability":
      return ["grafana", "prometheus", "elk", "cloudwatch", "monitor", "mimir", "alertmanager"].some(monitoring => name.includes(monitoring));
    case "Data & Messaging":
      return ["airflow", "kafka", "redis", "rabbitmq", "stream", "queue", "pipeline"].some(data => name.includes(data));
    case "Programming Languages":
      return ["python", "c++", "c", "javascript", "java"].some(lang => name.includes(lang));
    case "Databases":
      return ["sql", "mongo", "redis", "postgres", "mysql"].some(db => name.includes(db));
    case "Web Technologies":
      return ["react", "node", "html", "css", "bootstrap", "tailwind"].some(web => name.includes(web));
    default:
      return false;
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = skills.filter(skill => skillBelongsToCategory(skill, activeCategory));

  return (
    <div
      name="Skills"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-elegant-light dark:bg-gradient-elegant-dark"
    >
      <div className="section">
        <AnimatedWrapper>
          <div className="text-center mb-16 section-divider">
            <SectionHeading
              heading="Technical Skills"
              secondHeading="Technologies and tools I'm passionate about working with"
            />
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
        </AnimatedWrapper>

        {/* Elegant Category Filter */}
        <AnimatedWrapper delay={0.2}>
          <div className="mb-12 filter-divider">
            <div className="glass-effect rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-center mb-6 text-gray-800 dark:text-white">
                Filter by Category
              </h3>
              <div className="skills-filter">
                {skillCategories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-2 md:px-4 md:py-2.5 rounded-xl transition-all duration-300 font-medium text-xs md:text-sm ${
                      activeCategory === category 
                        ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg shadow-pink-500/25 scale-105 transform' 
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 hover:text-pink-600 dark:hover:text-pink-400 hover:scale-105 shadow-md border border-pink-100 dark:border-purple-800'
                    }`}
                    aria-pressed={activeCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.4}>
          <div className="content-card">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
                {activeCategory} {activeCategory !== "All" ? "Technologies" : "Skills"}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-800 dark:to-purple-800"></div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-pink-50 dark:bg-gray-700 px-3 py-1 rounded-full">
                {filteredSkills.length} skills
              </span>
            </div>
            
            <GridLayout style="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
              {filteredSkills.map((skill, i) => (
                <AnimatedWrapper
                  key={skill.name}
                  animateFrom="bottom"
                  delay={0.05 * (i % 8)}
                >
                  <div className="skill-card group">
                    <Skill skill={skill} />
                  </div>
                </AnimatedWrapper>
              ))}
            </GridLayout>
          </div>
        </AnimatedWrapper>

        {filteredSkills.length === 0 && (
          <AnimatedWrapper delay={0.6}>
            <div className="text-center py-16 content-card">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v1.306m8 0V7a2 2 0 012 2v6.414l-1.293-1.293a1 1 0 00-1.414 0L12 16.414l-2.293-2.293a1 1 0 00-1.414 0L7 15.414V9a2 2 0 012-2h8a2 2 0 012 2v6.414z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                No skills found in this category
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                It looks like there are no skills in the selected category. Try exploring other categories or view all skills.
              </p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="btn-primary"
                aria-label="Show all skills"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Show All Skills
                </span>
              </button>
            </div>
          </AnimatedWrapper>
        )}
      </div>
    </div>
  );
};

export default Skills;




