
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, BookOpen } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: "Adaptive Graph Neural Networks for Dynamic Network Analysis",
      authors: "Sarah Chen, Michael Johnson, Lisa Wang",
      venue: "Nature Machine Intelligence",
      year: "2024",
      abstract: "We propose a novel graph neural network architecture that adapts to temporal changes in network structure. Our approach achieves state-of-the-art performance on dynamic network prediction tasks across multiple domains including social networks, protein interactions, and financial markets.",
      tags: ["Graph Neural Networks", "Dynamic Networks", "Machine Learning"],
      links: {
        paper: "#",
        code: "#",
        arxiv: "#"
      },
      featured: true
    },
    {
      title: "Scalable Deep Learning for High-Dimensional Data Analysis",
      authors: "Sarah Chen, David Rodriguez, Emily Zhang",
      venue: "Journal of Machine Learning Research",
      year: "2024",
      abstract: "This work introduces memory-efficient deep learning architectures capable of processing high-dimensional datasets with millions of features. We demonstrate significant improvements in both computational efficiency and predictive performance on genomics and financial modeling tasks.",
      tags: ["Deep Learning", "Scalability", "High-Dimensional Data"],
      links: {
        paper: "#",
        code: "#",
        arxiv: "#"
      }
    },
    {
      title: "Interpretable Graph Convolutional Networks for Molecular Property Prediction",
      authors: "Sarah Chen, Robert Kim, Amanda Foster",
      venue: "ICML 2023",
      year: "2023",
      abstract: "We develop interpretable graph convolutional networks that provide insights into molecular structure-property relationships. Our approach combines predictive accuracy with chemical interpretability, enabling drug discovery applications.",
      tags: ["Graph CNNs", "Molecular ML", "Interpretability"],
      links: {
        paper: "#",
        code: "#",
        arxiv: "#"
      },
      award: "Best Paper Award"
    },
    {
      title: "Few-Shot Learning on Graphs with Meta-Learning",
      authors: "Sarah Chen, Tom Wilson, Grace Liu",
      venue: "NeurIPS 2023",
      year: "2023",
      abstract: "We address the challenge of learning on graphs with limited labeled data by combining graph neural networks with meta-learning techniques. Our approach enables rapid adaptation to new graph domains with minimal training examples.",
      tags: ["Few-Shot Learning", "Meta-Learning", "Graph ML"],
      links: {
        paper: "#",
        code: "#",
        arxiv: "#"
      }
    },
    {
      title: "Robust Graph Neural Networks Against Adversarial Attacks",
      authors: "Sarah Chen, Alex Thompson, Maria Garcia",
      venue: "ICLR 2023",
      year: "2023",
      abstract: "This paper investigates the vulnerability of graph neural networks to adversarial attacks and proposes robust training techniques. We demonstrate improved resilience against both targeted and untargeted attacks on node classification tasks.",
      tags: ["Graph Security", "Adversarial ML", "Robustness"],
      links: {
        paper: "#",
        code: "#",
        arxiv: "#"
      }
    },
    {
      title: "Attention Mechanisms in Graph Neural Networks: A Comprehensive Survey",
      authors: "Sarah Chen, Jennifer Brown, Kevin Lee",
      venue: "ACM Computing Surveys",
      year: "2022",
      abstract: "A comprehensive survey of attention mechanisms in graph neural networks, covering theoretical foundations, architectural variants, and applications. We provide a taxonomy of existing approaches and identify future research directions.",
      tags: ["Survey", "Attention", "Graph Neural Networks"],
      links: {
        paper: "#",
        arxiv: "#"
      }
    }
  ];

  const researchAreas = [
    {
      title: "Graph Neural Networks",
      description: "Developing novel architectures for learning on graph-structured data",
      icon: "🔗"
    },
    {
      title: "Deep Learning Theory",
      description: "Understanding theoretical foundations of deep learning systems",
      icon: "🧠"
    },
    {
      title: "Representation Learning",
      description: "Learning meaningful representations from complex data structures",
      icon: "📊"
    },
    {
      title: "Interpretable AI",
      description: "Making machine learning models more transparent and explainable",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advancing the frontiers of machine learning through rigorous research and innovation
          </p>
        </div>

        {/* Research Areas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Publications</h2>
            <div className="text-sm text-muted-foreground">
              Showing {publications.length} publications
            </div>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${pub.featured ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{pub.title}</h3>
                        {pub.featured && (
                          <Badge variant="default" className="bg-primary">Featured</Badge>
                        )}
                        {pub.award && (
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            <Award className="w-3 h-3 mr-1" />
                            {pub.award}
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-2">{pub.authors}</p>
                      <p className="text-sm text-primary font-medium mb-4">
                        {pub.venue} · {pub.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Paper
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                    {pub.links.code && (
                      <Button variant="outline" size="sm">
                        Code
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      arXiv
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Profiles */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Academic Profiles</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg">
              Google Scholar
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              ResearchGate
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              ORCID
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;
