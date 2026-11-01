import React, { useEffect } from 'react';
import { useAppRoute, navigate } from './utils/router';
import { getProjectBySlug } from './data/projects';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { ToolStack } from './components/ToolStack';
import { About } from './components/About';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';

export default function App() {
  const [route, setRoute] = useAppRoute();

  // Scroll to section when on home page with hash
  useEffect(() => {
    if (route.type === 'home' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  }, [route]);

  const handleSelectProject = (slug: string) => {
    navigate(`/work/${slug}`);
  };

  const handleBackToWork = () => {
    navigate('/#work');
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#work');
    }
  };

  // Render individual project page if route is /work/:slug
  if (route.type === 'project') {
    const project = getProjectBySlug(route.slug, true);

    if (!project) {
      return (
        <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2] flex flex-col justify-between">
          <Header onNavigate={setRoute} />
          <main className="max-w-[1200px] mx-auto px-6 py-32 text-center flex-1 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-normal mb-3">Project Not Found</h1>
            <p className="text-[#898989] mb-6 text-xs font-mono">
              The requested project does not exist or has been moved.
            </p>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-xs font-mono uppercase tracking-widest text-[#F2F2F2] bg-[#131315] border border-[#303033] hover:border-[#EF3E42] transition-colors px-4 py-2"
            >
              ← Return to Selected Work
            </button>
          </main>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2] flex flex-col justify-between selection:bg-[#EF3E42] selection:text-[#F2F2F2]">
        <Header onNavigate={setRoute} />
        <main className="flex-1">
          <ProjectDetail
            project={project}
            onBackToWork={handleBackToWork}
            onNavigateProject={handleSelectProject}
          />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Home page with compact primary sections
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2] flex flex-col justify-between selection:bg-[#EF3E42] selection:text-[#F2F2F2]">
      <Header onNavigate={setRoute} />
      <main className="flex-1">
        <Hero onExploreClick={handleExploreClick} />
        <SelectedWork onSelectProject={handleSelectProject} />
        <ToolStack />
        <About />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
