
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate researcher and data scientist dedicated to advancing machine learning and its applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Bio */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    I am a passionate researcher and data scientist with over 8 years of experience in machine learning, 
                    artificial intelligence, and statistical analysis. Currently pursuing my Ph.D. in Computer Science at 
                    Stanford University, I specialize in Graph Neural Networks and their applications to complex real-world problems.
                  </p>
                  <p>
                    My research focuses on developing novel deep learning architectures that can effectively learn from 
                    graph-structured data. This work has applications across diverse domains including social network analysis, 
                    drug discovery, and recommendation systems. I have published over 25 peer-reviewed papers in top-tier 
                    conferences and journals.
                  </p>
                  <p>
                    Beyond academia, I work as a freelance data scientist, helping organizations leverage their data assets 
                    to drive business value. I have collaborated with startups, Fortune 500 companies, and non-profit 
                    organizations to solve complex analytical challenges using cutting-edge machine learning techniques.
                  </p>
                  <p>
                    I am passionate about making machine learning accessible and interpretable. I regularly contribute to 
                    open-source projects, write technical blogs, and speak at conferences to share knowledge with the 
                    broader community.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download Full CV
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Research Interests */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Research Interests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Core Areas</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Graph Neural Networks</li>
                      <li>• Deep Learning</li>
                      <li>• Machine Learning Theory</li>
                      <li>• Representation Learning</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Applications</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Social Network Analysis</li>
                      <li>• Computational Biology</li>
                      <li>• Recommendation Systems</li>
                      <li>• Natural Language Processing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Ph.D. Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Stanford University</p>
                    <p className="text-sm text-muted-foreground">2021 - Present</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Thesis: "Adaptive Graph Neural Networks for Dynamic Networks"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">M.S. Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">Carnegie Mellon University</p>
                    <p className="text-sm text-muted-foreground">2018 - 2020</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">B.S. Computer Science</h4>
                    <p className="text-sm text-muted-foreground">UC Berkeley</p>
                    <p className="text-sm text-muted-foreground">2014 - 2018</p>
                    <p className="text-xs text-muted-foreground mt-1">Summa Cum Laude</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Awards */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Awards & Honors</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">NSF Graduate Research Fellowship</h4>
                    <p className="text-sm text-muted-foreground">2021</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Best Paper Award</h4>
                    <p className="text-sm text-muted-foreground">ICML 2023</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Google PhD Fellowship</h4>
                    <p className="text-sm text-muted-foreground">2022</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Outstanding Graduate Award</h4>
                    <p className="text-sm text-muted-foreground">CMU, 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Technical Skills</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Programming</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Python</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">R</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Julia</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">SQL</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">ML/DL Frameworks</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">PyTorch</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">TensorFlow</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">JAX</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Scikit-learn</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">AWS</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Docker</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Git</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Spark</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
