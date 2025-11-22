import ProductPage from "@/components/ProductPage";
import jobPrepHeroImage from "@/assets/job-prep-hero.jpg";

const JobPrepKit = () => {
  const features = [
    {
      title: "Complete Interview Prep Checklist",
      description: "Step-by-step checklist covering everything from research to post-interview follow-up."
    },
    {
      title: "STAR Method Mastery",
      description: "Learn the proven STAR framework with 15+ real examples across different job functions."
    },
    {
      title: "Common Question Scripts",
      description: "Word-for-word response templates for the 30 most common interview questions."
    },
    {
      title: "Weakness & Strength Frameworks",
      description: "Authentic templates for discussing weaknesses that impress and strengths that resonate."
    },
    {
      title: "Tell Me About Yourself",
      description: "5 different intro templates tailored for various experience levels and career situations."
    },
    {
      title: "Salary Negotiation Prep",
      description: "Scripts and strategies for discussing compensation confidently and professionally."
    }
  ];

  const whatsIncluded = [
    "40+ page comprehensive interview preparation guide",
    "Pre-interview research checklist",
    "15+ STAR method examples with full stories",
    "30 common interview question scripts",
    "5 Tell me about yourself templates",
    "Weakness discussion frameworks (8 variations)",
    "Strength showcasing templates (10 examples)",
    "Thank you email templates",
    "Salary negotiation scripts and tactics",
    "Phone vs video vs in-person interview tips",
    "Body language and presentation guide",
    "Follow-up strategies for every scenario"
  ];

  const whoIsThisFor = [
    "Job seekers preparing for upcoming interviews",
    "Career changers entering new industries",
    "Recent graduates with limited interview experience",
    "Professionals interviewing after a long career gap",
    "Anyone who gets nervous during interviews",
    "Candidates wanting to nail behavioral questions"
  ];

  const benefits = [
    "Walk into every interview feeling prepared and confident",
    "Answer behavioral questions like a pro with proven STAR examples",
    "Eliminate awkward pauses with ready-to-use response frameworks",
    "Make a memorable first impression with polished introductions",
    "Turn your weaknesses into strengths with strategic framing",
    "Get the offer with professional follow-up and negotiation tactics"
  ];

  return (
    <ProductPage
      title="Job Interview Prep Starter Kit"
      subtitle="Everything You Need to Ace Your Next Interview with Confidence"
      price="24.99"
      heroImage={jobPrepHeroImage}
      metaTitle="Job Interview Preparation Kit - Ace Any Interview | Inkvale"
      metaDescription="Complete interview prep guide with STAR method examples, question scripts, and proven templates. Master behavioral interviews and land your dream job."
      canonicalUrl="https://inkvale.com/products/job-prep-starter-kit"
      features={features}
      whatsIncluded={whatsIncluded}
      whoIsThisFor={whoIsThisFor}
      benefits={benefits}
      gumroadUrl="#"
      productType="Digital Starter Kit"
    />
  );
};

export default JobPrepKit;
