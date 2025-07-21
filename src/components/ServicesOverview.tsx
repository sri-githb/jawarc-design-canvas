import { 
  Building2, 
  Home, 
  Paintbrush, 
  TreePine, 
  Hammer, 
  Gem, 
  Settings, 
  MapPin 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesOverview = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Interior Design",
      description: "Elegant and functional interior spaces that reflect your style and meet your needs."
    },
    {
      icon: Building2,
      title: "Building Layouts",
      description: "Comprehensive architectural planning and layout design for optimal space utilization."
    },
    {
      icon: Hammer,
      title: "Construction Management",
      description: "End-to-end construction services with quality assurance and timeline management."
    },
    {
      icon: Home,
      title: "Residential Projects",
      description: "Custom home designs that blend comfort, functionality, and aesthetic appeal."
    },
    {
      icon: TreePine,
      title: "Landscape Design",
      description: "Beautiful outdoor spaces that complement your architectural vision."
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "Modern office buildings and commercial spaces designed for productivity."
    },
    {
      icon: Gem,
      title: "Jewelry Design",
      description: "Specialized design services for jewelry stores and luxury retail spaces."
    },
    {
      icon: Settings,
      title: "Complex Projects",
      description: "Multi-faceted projects requiring specialized expertise and coordination."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive architectural and design services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon size={32} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Office Locations */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="text-primary mr-2" size={24} />
            <h3 className="text-2xl font-semibold text-foreground">Our Locations</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-muted-foreground">
            <span className="px-4 py-2 bg-secondary rounded-lg">Vaniyambadi</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Gudiyatam</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Vellore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;