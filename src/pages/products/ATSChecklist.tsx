import ProductPage from "@/components/ProductPage";
import atsHeroImage from "@/assets/ats-checklist-hero.jpg";

const ATSChecklist = () => {
  const features = [
    {
      title: "Resume Format Optimization",
      description: "Ensure your resume uses ATS-friendly formatting, fonts, and structure that passes automated screening."
    },
    {
      title: "Keyword Strategy",
      description: "Learn how to identify and incorporate job-specific keywords that trigger ATS matching algorithms."
    },
    {
      title: "Section Organization",
      description: "Organize your resume sections in the optimal order for both ATS parsing and human readability."
    },
    {
      title: "File Type Best Practices",
      description: "Understand which file formats work best with different ATS systems and avoid common pitfalls."
    },
    {
      title: "Content Optimization",
      description: "Write achievement-focused bullet points that satisfy both ATS requirements and hiring managers."
    },
    {
      title: "Common ATS Mistakes",
      description: "Avoid the 25 most common errors that cause resumes to be automatically rejected by ATS systems."
    }
  ];

  const whatsIncluded = [
    "30-point comprehensive ATS checklist",
    "Detailed explanations for each checklist item",
    "Before/after resume examples",
    "Keyword research guide",
    "ATS-friendly template recommendations",
    "Quick reference cheat sheet",
    "Bonus: Top ATS systems comparison guide",
    "Lifetime access and updates",
    "PDF format for easy printing"
  ];

  const whoIsThisFor = [
    "Job seekers applying through online portals",
    "Career changers updating their resumes",
    "Recent graduates entering the job market",
    "Professionals not hearing back from applications",
    "Anyone wanting to optimize their resume for ATS",
    "Career coaches helping clients with job applications"
  ];

  const benefits = [
    "Increase your resume visibility by up to 70% with ATS-optimized formatting",
    "Get past automated filters and reach human recruiters faster",
    "Save hours of research with our proven, battle-tested checklist",
    "Apply confidently knowing your resume meets ATS requirements",
    "Stand out in both automated screening and manual review",
    "Use for unlimited job applications across all industries"
  ];

  return (
    <ProductPage
      title="ATS Optimization Checklist"
      subtitle="The Complete Guide to Getting Your Resume Past Applicant Tracking Systems"
      price="14.99"
      heroImage={atsHeroImage}
      metaTitle="ATS Optimization Checklist - Get Past Applicant Tracking Systems | Inkvale"
      metaDescription="Master the art of ATS optimization with our comprehensive 30-point checklist. Increase your resume visibility by 70% and get more interview callbacks."
      canonicalUrl="https://inkvale.com/products/ats-checklist"
      features={features}
      whatsIncluded={whatsIncluded}
      whoIsThisFor={whoIsThisFor}
      benefits={benefits}
      gumroadUrl="#"
      productType="Digital Checklist"
    />
  );
};

export default ATSChecklist;
