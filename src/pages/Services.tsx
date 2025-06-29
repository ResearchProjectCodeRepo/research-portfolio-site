
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Brain, 
  BookOpen, 
  Users, 
  Zap, 
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart,
      title: "Data Analysis & Visualization",
      description: "Transform your raw data into actionable insights with advanced statistical analysis and compelling visualizations.",
      features: [
        "Exploratory Data Analysis",
        "Statistical Modeling",
        "Interactive Dashboards",
        "Custom Visualizations",
        "Report Generation"
      ],
      pricing: "Starting at $150/hour",
      deliverables: "Analysis reports, interactive dashboards, data documentation"
    },
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Build and deploy custom machine learning models tailored to your specific business challenges and objectives.",
      features: [
        "Predictive Modeling",
        "Classification & Regression",
        "Deep Learning Models",
        "Model Deployment",
        "Performance Optimization"
      ],
      pricing: "Project-based: $5K - $50K",
      deliverables: "Trained models, deployment pipeline, performance metrics"
    },
    {
      icon: Users,
      title: "Research Consulting",
      description: "Expert guidance on research methodology, experimental design, and academic collaboration for cutting-edge projects.",
      features: [
        "Research Strategy",
        "Methodology Design",
        "Grant Proposal Support",
        "Peer Review",
        "Academic Collaboration"
      ],
      pricing: "$200/hour",
      deliverables: "Research plans, methodology documents, proposal drafts"
    },
    {
      icon: BookOpen,
      title: "Academic Writing Support",
      description: "Professional assistance with technical writing, paper preparation, and publication support for academic research.",
      features: [
        "Paper Writing & Editing",
        "Literature Reviews",
        "Technical Documentation",
        "Publication Strategy",
        "Presentation Design"
      ],
      pricing: "$100-175/hour",
      deliverables: "Polished manuscripts, documentation, presentation materials"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Michael Johnson",
      role: "VP of Analytics, TechCorp",
      company: "Fortune 500 Technology Company",
      content: "Sarah's expertise in graph neural networks helped us revolutionize our recommendation system. The 40% improvement in user engagement exceeded all our expectations.",
      rating: 5
    },
    {
      name: "Prof. Lisa Wang",
      role: "Research Director",
      company: "MIT Computer Science",
      content: "Collaborating with Sarah on our NIH grant proposal was invaluable. Her methodological insights and writing expertise were instrumental in securing funding.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      role: "CEO",
      company: "HealthTech Startup",
      content: "Sarah's machine learning models for patient outcome prediction have become the cornerstone of our platform. Her work directly contributed to our Series A funding.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      role: "Data Science Manager",
      company: "Pharmaceutical Research Lab",
      content: "The molecular property prediction system Sarah developed accelerated our drug discovery pipeline by months. Exceptional technical skill and domain understanding.",
      rating: 5
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery Call",
      description: "We discuss your project goals, challenges, and requirements in detail to understand your needs."
    },
    {
      step: 2,
      title: "Proposal & Planning",
      description: "I provide a detailed proposal with timeline, deliverables, and project milestones."
    },
    {
      step: 3,
      title: "Development & Iteration",
      description: "Regular check-ins and iterations ensure the solution meets your expectations."
    },
    {
      step: 4,
      title: "Delivery & Support",
      description: "Final delivery with documentation, training, and ongoing support as needed."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert data science and machine learning consulting to transform your business and research
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Pricing & Deliverables */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Pricing:</span>
                      <Badge variant="outline" className="text-primary border-primary">
                        {service.pricing}
                      </Badge>
                    </div>
                    <div>
                      <span className="font-medium">Deliverables: </span>
                      <span className="text-sm text-muted-foreground">{service.deliverables}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined process designed to deliver exceptional results efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              What clients say about working with me
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-12">
              <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're looking to build cutting-edge ML models, gain insights from your data, 
                or accelerate your research, I'm here to help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base">
                  Schedule a Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  View Portfolio
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Free 30-minute consultation • No obligation • Fast response
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Services;
