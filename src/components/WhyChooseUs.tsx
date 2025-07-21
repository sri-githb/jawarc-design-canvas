import { Award, Users, Clock, Lightbulb } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Trendy & Modern Designs",
      description: "Stay ahead with cutting-edge architectural trends and innovative design solutions."
    },
    {
      icon: Users,
      title: "Multi-Location Presence", 
      description: "Serving clients across Vaniyambadi, Gudiyatam, and Vellore with local expertise."
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Skilled professionals with years of experience in diverse architectural projects."
    },
    {
      icon: Clock,
      title: "Comprehensive Services",
      description: "From concept to completion, we handle every aspect of your project with precision."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Jawarc?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine creativity, expertise, and local knowledge to deliver exceptional architectural solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon size={36} className="text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-secondary/50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss your vision and create something extraordinary together. 
            Our team is ready to bring your architectural dreams to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Get Free Consultation
            </a>
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;