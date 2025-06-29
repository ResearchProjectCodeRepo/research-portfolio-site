
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Dr. Sarah Chen
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Research Scholar | Freelance Data Scientist
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Advancing the frontiers of Machine Learning and Graph Neural Networks through rigorous research. 
                  Helping organizations transform data into actionable insights through innovative analytics solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/projects">View Projects</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
              
              <div className="flex space-x-6 pt-4">
                <a href="mailto:sarah.chen@university.edu" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/sarahchen" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/sarahchen" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 p-2">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                    alt="Dr. Sarah Chen"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Focus</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pushing the boundaries of artificial intelligence through innovative research in machine learning and neural networks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Graph Neural Networks</h3>
                <p className="text-muted-foreground">
                  Developing novel architectures for learning on graph-structured data with applications in social networks and molecular analysis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Deep Learning</h3>
                <p className="text-muted-foreground">
                  Advancing deep learning methodologies for complex pattern recognition and predictive modeling across domains.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Science</h3>
                <p className="text-muted-foreground">
                  Translating cutting-edge research into practical solutions for real-world data challenges and business insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Publications</h2>
            <p className="text-lg text-muted-foreground">
              Latest contributions to the scientific community
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">
                  Adaptive Graph Neural Networks for Dynamic Network Analysis
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Nature Machine Intelligence</strong> · 2024
                </p>
                <p className="text-muted-foreground mb-4">
                  A novel approach to handling temporal dynamics in graph neural networks, achieving state-of-the-art performance on several benchmark datasets for dynamic network prediction tasks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Graph Neural Networks</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Dynamic Networks</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Machine Learning</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">
                  Scalable Deep Learning for High-Dimensional Data Analysis
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Journal of Machine Learning Research</strong> · 2024
                </p>
                <p className="text-muted-foreground mb-4">
                  Introducing memory-efficient architectures for processing high-dimensional datasets, with applications to genomics and financial modeling.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Deep Learning</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Scalability</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">High-Dimensional Data</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/research">View All Publications</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
