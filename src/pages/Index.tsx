import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Inkvale Career Products",
    url: "https://inkvale.com/",
  };

  return (
    <>
      <Helmet>
        <title>Inkvale Career Products - ATS, LinkedIn & Interview Kits</title>
        <meta
          name="description"
          content="Practical career tools from Inkvale: ATS optimization checklist, LinkedIn mini guide, and job interview prep starter kit."
        />
        <link rel="canonical" href="https://inkvale.com/" />

        <meta property="og:title" content="Inkvale Career Products" />
        <meta
          property="og:description"
          content="ATS checklist, LinkedIn optimization guide, and interview prep kit to level up your job search."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inkvale.com/" />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        <main className="container mx-auto px-4 py-12">
          <section className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Inkvale Career Tools
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Three focused digital products to help you get past ATS, stand out on LinkedIn,
              and walk into interviews prepared.
            </p>
            <Button size="lg" className="bg-gradient-hero shadow-medium hover:opacity-90 transition-opacity" asChild>
              <a href="#products">Browse products</a>
            </Button>
          </section>

          <section id="products" className="grid gap-8 md:grid-cols-3">
            <Card className="p-6 flex flex-col justify-between shadow-soft bg-card">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-card-foreground">
                  ATS Optimization Checklist
                </h2>
                <p className="text-muted-foreground mb-4">
                  30-point checklist to make your resume ATS-friendly and increase your chances of
                  getting seen by recruiters.
                </p>
                <p className="font-semibold text-card-foreground mb-4">$14.99 • Digital checklist</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6 list-disc list-inside">
                  <li>Step-by-step ATS optimization</li>
                  <li>Before/after resume examples</li>
                  <li>Quick reference cheat sheet</li>
                </ul>
              </div>
              <Button size="sm" variant="secondary" className="mt-2" asChild>
                <Link to="/products/ats-checklist">View checklist</Link>
              </Button>
            </Card>

            <Card className="p-6 flex flex-col justify-between shadow-soft bg-card">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-card-foreground">
                  LinkedIn Profile Mini Guide
                </h2>
                <p className="text-muted-foreground mb-4">
                  Concise optimization guide with real examples to turn your LinkedIn profile into a
                  recruiter magnet.
                </p>
                <p className="font-semibold text-card-foreground mb-4">$19.99 • Digital guide</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6 list-disc list-inside">
                  <li>Headline & About section templates</li>
                  <li>Experience rewrites for 15+ roles</li>
                  <li>LinkedIn SEO strategies</li>
                </ul>
              </div>
              <Button size="sm" variant="secondary" className="mt-2" asChild>
                <Link to="/products/linkedin-mini-guide">View guide</Link>
              </Button>
            </Card>

            <Card className="p-6 flex flex-col justify-between shadow-soft bg-card">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-card-foreground">
                  Job Interview Prep Starter Kit
                </h2>
                <p className="text-muted-foreground mb-4">
                  Complete interview prep system with STAR examples, scripts, and templates.
                </p>
                <p className="font-semibold text-card-foreground mb-4">$24.99 • Starter kit</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6 list-disc list-inside">
                  <li>Interview prep checklist</li>
                  <li>30+ question scripts</li>
                  <li>Tell me about yourself templates</li>
                </ul>
              </div>
              <Button size="sm" variant="secondary" className="mt-2" asChild>
                <Link to="/products/job-prep-starter-kit">View kit</Link>
              </Button>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
};

export default Index;
