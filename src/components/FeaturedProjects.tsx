import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInterior from "@/assets/project-interior.jpg";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      location: "Vellore",
      type: "Residential",
      year: "2024",
      image: projectResidential,
      description: "A contemporary residential complex featuring modern amenities and sustainable design principles."
    },
    {
      id: 2,
      title: "Corporate Office Building",
      location: "Gudiyatam",
      type: "Commercial", 
      year: "2023",
      image: projectCommercial,
      description: "Innovative office space designed for productivity and collaboration with state-of-the-art facilities."
    },
    {
      id: 3,
      title: "Luxury Interior Design",
      location: "Vaniyambadi",
      type: "Interior",
      year: "2024", 
      image: projectInterior,
      description: "Elegant interior design combining modern aesthetics with functional living spaces."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our latest architectural achievements and design innovations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border-border bg-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-foreground">{project.type}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                
                <p className="text-muted-foreground mb-3 text-sm">
                  📍 {project.location}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  View Project Details
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            View All Projects
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;