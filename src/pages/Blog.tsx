
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Graph Neural Networks: A Comprehensive Guide",
      excerpt: "Dive deep into the world of Graph Neural Networks, from basic concepts to advanced architectures. Learn how GNNs are revolutionizing machine learning on structured data.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      date: "2024-03-15",
      readTime: "12 min read",
      category: "Machine Learning",
      tags: ["Graph Neural Networks", "Deep Learning", "Tutorial"],
      featured: true
    },
    {
      title: "The Future of AI in Drug Discovery: Opportunities and Challenges",
      excerpt: "Exploring how artificial intelligence is transforming pharmaceutical research, from molecular property prediction to clinical trial optimization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      date: "2024-03-08",
      readTime: "8 min read",
      category: "AI Applications",
      tags: ["Drug Discovery", "Healthcare AI", "Research"],
      featured: false
    },
    {
      title: "Building Scalable ML Pipelines: Lessons from Production",
      excerpt: "Practical insights on designing and implementing machine learning pipelines that can handle real-world scale and complexity.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      date: "2024-02-28",
      readTime: "10 min read",
      category: "MLOps",
      tags: ["ML Engineering", "Scalability", "Production"],
      featured: false
    },
    {
      title: "Interpretable AI: Making Black Boxes Transparent",
      excerpt: "Why interpretability matters in machine learning and practical techniques for making your models more explainable and trustworthy.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      date: "2024-02-20",
      readTime: "7 min read",
      category: "AI Ethics",
      tags: ["Interpretability", "XAI", "Ethics"],
      featured: false
    },
    {
      title: "From Academia to Industry: Bridging the ML Research Gap",
      excerpt: "Reflections on transitioning machine learning research from academic papers to real-world applications that create business value.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      date: "2024-02-12",
      readTime: "6 min read",
      category: "Career",
      tags: ["Academia", "Industry", "Career Advice"],
      featured: false
    },
    {
      title: "Graph Attention Networks: Focusing on What Matters",
      excerpt: "A deep dive into attention mechanisms in graph neural networks and how they improve model performance and interpretability.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      date: "2024-02-05",
      readTime: "9 min read",
      category: "Deep Learning",
      tags: ["Attention", "Graph Networks", "Technical"],
      featured: false
    }
  ];

  const categories = ["All", "Machine Learning", "AI Applications", "MLOps", "AI Ethics", "Career", "Deep Learning"];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on machine learning, research, and data science
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

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <Card key={index} className="mb-12 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4">{post.category}</Badge>
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(post.date)}
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  {post.readTime}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="w-fit">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 right-4 bg-background/90 text-foreground"
                >
                  {post.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(post.date)}
                  <Clock className="h-3 w-3 ml-3 mr-1" />
                  {post.readTime}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>
                
                <Button variant="ghost" size="sm" className="p-0 h-auto font-medium group-hover:text-primary">
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <section className="mt-20">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest insights on machine learning, research trends, and data science 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Blog;
