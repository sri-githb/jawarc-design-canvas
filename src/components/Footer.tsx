import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const officeLocations = [
    {
      city: "Vaniyambadi",
      address: "123 Main Street, Vaniyambadi",
      phone: "+91 XXXX XXXX"
    },
    {
      city: "Gudiyatam", 
      address: "456 Design Avenue, Gudiyatam",
      phone: "+91 XXXX XXXX"
    },
    {
      city: "Vellore",
      address: "789 Architecture Lane, Vellore", 
      phone: "+91 XXXX XXXX"
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Interior Design",
    "Building Layouts", 
    "Construction",
    "Residential Projects",
    "Landscape Design",
    "Commercial Buildings"
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Jawarc</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Architecture & Interior Designs
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Creating trendy and modern buildings with expertise spanning across 
              interior design, construction, and complex architectural projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-primary-foreground/70" />
                <span className="text-primary-foreground/80 text-sm">
                  info@jawarc.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-primary-foreground/70" />
                <span className="text-primary-foreground/80 text-sm">
                  +91 XXXX XXXXXX
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://instagram.com/jawarc"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a 
                  href="https://facebook.com/jawarc"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a 
                  href="https://wa.me/yourwhatsappnumber"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Office Locations</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((office) => (
              <div key={office.city} className="text-center p-4 bg-primary-foreground/5 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <MapPin size={16} className="mr-2 text-primary-foreground/70" />
                  <h5 className="font-medium">{office.city}</h5>
                </div>
                <p className="text-primary-foreground/70 text-sm mb-2">{office.address}</p>
                <p className="text-primary-foreground/80 text-sm">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Jawarc Architecture & Interior Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;