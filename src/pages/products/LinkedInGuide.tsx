import ProductPage from "@/components/ProductPage";
import linkedInHeroImage from "@/assets/linkedin-guide-hero.jpg";

const LinkedInGuide = () => {
  const features = [
    {
      title: "Profile Headline Formulas",
      description: "Proven headline templates that get 3x more profile views and attract recruiter attention."
    },
    {
      title: "About Section Mastery",
      description: "Learn how to write a compelling About section that tells your story and drives connection requests."
    },
    {
      title: "Experience Optimization",
      description: "Transform boring job descriptions into achievement-focused experience bullets that showcase impact."
    },
    {
      title: "SEO for LinkedIn",
      description: "Master LinkedIn's search algorithm to appear in more recruiter searches and job opportunities."
    },
    {
      title: "Skills & Endorsements",
      description: "Strategic skill selection and endorsement tactics to boost your profile's credibility and ranking."
    },
    {
      title: "Content Strategy Basics",
      description: "Learn what to post, when to post, and how to engage to build your professional brand."
    }
  ];

  const whatsIncluded = [
    "30+ section-by-section optimization guide",
    "20+ real profile examples with before/after",
    "Headline formula templates (10+ variations)",
    "About section templates (5 different styles)",
    "Experience rewrite examples from 15+ industries",
    "LinkedIn SEO keyword strategy guide",
    "Profile photo and banner best practices",
    "Connection request message templates",
    "Content posting schedule and tips"
  ];

  const whoIsThisFor = [
    "Professionals looking to attract recruiters",
    "Job seekers wanting to optimize their LinkedIn presence",
    "Entrepreneurs building their personal brand",
    "Career changers repositioning their narrative",
    "Sales and business development professionals",
    "Anyone with an outdated or incomplete LinkedIn profile"
  ];

  const benefits = [
    "Increase profile views by 300%+ with optimized headlines and keywords",
    "Get found by recruiters searching for your skills and experience",
    "Build credibility and authority in your industry",
    "Attract high-quality connection requests automatically",
    "Learn strategies used by top 1% of LinkedIn profiles",
    "Apply changes in under 2 hours for immediate results"
  ];

  return (
    <ProductPage
      title="LinkedIn Profile Mini Guide"
      subtitle="Transform Your LinkedIn Profile from Invisible to Irresistible"
      price="19.99"
      heroImage={linkedInHeroImage}
      metaTitle="LinkedIn Optimization Guide - Attract Recruiters & Opportunities | Inkvale"
      metaDescription="Complete LinkedIn optimization guide with proven templates and real examples. Increase profile views by 300% and get found by recruiters."
      canonicalUrl="https://inkvale.com/products/linkedin-mini-guide"
      features={features}
      whatsIncluded={whatsIncluded}
      whoIsThisFor={whoIsThisFor}
      benefits={benefits}
      gumroadUrl="#"
      productType="Digital Guide"
    />
  );
};

export default LinkedInGuide;
