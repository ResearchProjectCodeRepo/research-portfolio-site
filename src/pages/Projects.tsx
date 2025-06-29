
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "GraphScope: Dynamic Network Analysis Platform",
      description: "An end-to-end platform for analyzing dynamic networks using state-of-the-art graph neural networks. Built for a Fortune 500 telecommunications company to analyze customer interaction patterns and predict churn.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Python", "PyTorch", "React", "PostgreSQL", "Docker"],
      category: "Freelance",
      impact: "Reduced customer churn by 23% and increased model accuracy by 31%",
      links: {
        demo: "#",
        github: "#"
      },
      featured: true
    },
    {
      title: "MolecularML: Drug Discovery Assistant",
      description: "Machine learning pipeline for predicting molecular properties and drug-target interactions. Developed as part of collaboration with pharmaceutical research labs to accelerate drug discovery processes.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Python", "PyTorch Geometric", "RDKit", "Streamlit", "AWS"],
      category: "Academic",
      impact: "Accelerated molecular screening by 10x and identified 15 promising drug candidates",
      links: {
        demo: "#",
        github: "#",
        paper: "#"
      }
    },
    {
      title: "FinanceIQ: Algorithmic Trading System",
      description: "Deep learning-based algorithmic trading system that analyzes market sentiment, technical indicators, and news data to make investment decisions. Built for a hedge fund client.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Apache Kafka", "Redis", "MongoDB"],
      category: "Freelance",
      impact: "Achieved 18% annual return with 15% lower volatility than benchmark",
      links: {
        demo: "#"
      },
      confidential: true
    },
    {
      title: "SocialNet Analyzer: Community Detection Tool",
      description: "Advanced social network analysis tool using graph neural networks to detect communities, predict link formation, and analyze influence propagation in large-scale social networks.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["Python", "NetworkX", "PyTorch", "D3.js", "Flask"],
      category: "Research",
      impact: "Published in top-tier conference with 50+ citations",
      links: {
        demo: "#",
        github: "#",
        paper: "#"
      }
    },
    {
      title: "HealthPredict: Clinical Decision Support",
      description: "Machine learning system for predicting patient outcomes and recommending treatment plans. Developed in collaboration with healthcare providers to improve clinical decision-making.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      technologies: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL", "Vue.js"],
      category: "Healthcare",
      impact: "Improved diagnostic accuracy by 27% and reduced treatment time by 35%",
      links: {
        demo: "#"
      }
    },
    {
      title: "EcoMonitor: Environmental Data Analysis",
      description: "Comprehensive environmental monitoring system using satellite imagery and sensor data to track deforestation, pollution levels, and climate changes. Pro-bono project for environmental NGOs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Google Earth Engine", "PostgreSQL", "React"],
      category: "Non-profit",
      impact: "Monitoring 50,000+ sq km of forest area and supporting 5 conservation projects",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const categories = ["All", "Freelance", "Academic", "Research", "Healthcare", "Non-profit"];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of data science and machine learning projects spanning research, industry, and social impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${project.featured ? 'ring-2 ring-primary' : ''}`}>
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                )}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 right-4 bg-background/90 text-foreground"
                >
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Impact */}
                <div className="bg-primary/5 p-3 rounded-lg mb-4">
                  <p className="text-sm font-medium text-primary mb-1">Impact</p>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>
                
                {/* Links */}
                <div className="flex flex-wrap gap-2">
                  {project.links.demo && (
                    <Button variant="outline" size="sm">
                      {project.confidential ? "Request Demo" : "Live Demo"}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.links.paper && (
                    <Button variant="outline" size="sm">
                      Paper
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
              <p className="text-muted-foreground mb-6">
                I'm always interested in challenging data science projects that make a real impact. 
                Let's discuss how we can bring your vision to life with cutting-edge machine learning.
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
