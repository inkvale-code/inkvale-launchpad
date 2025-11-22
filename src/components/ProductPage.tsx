import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Download, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface ProductFeature {
  title: string;
  description: string;
}

interface ProductPageProps {
  title: string;
  subtitle: string;
  price: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  features: ProductFeature[];
  whatsIncluded: string[];
  whoIsThisFor: string[];
  benefits: string[];
  gumroadUrl: string;
  productType: string;
}

const ProductPage = ({
  title,
  subtitle,
  price,
  heroImage,
  metaTitle,
  metaDescription,
  canonicalUrl,
  features,
  whatsIncluded,
  whoIsThisFor,
  benefits,
  gumroadUrl,
  productType,
}: ProductPageProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: subtitle,
    image: heroImage,
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={heroImage} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={heroImage} />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        {/* Breadcrumbs */}
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <a href="/" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/products" className="hover:text-primary transition-colors">
                Products
              </a>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">{title}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">
                {productType}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>
              
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-foreground">${price}</span>
                <span className="text-muted-foreground">one-time payment</span>
              </div>

              <div className="flex gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-medium"
                  asChild
                >
                  <a href={gumroadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Get Instant Access
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>Instant download • Lifetime access</span>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt={title}
                className="rounded-lg shadow-medium w-full"
              />
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whatsIncluded.map((item, index) => (
                <Card key={index} className="p-6 shadow-soft">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <p className="text-card-foreground">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Everything You Need
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose This Guide?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 bg-card shadow-soft">
                  <CheckCircle2 className="h-8 w-8 text-success mb-4" />
                  <p className="text-card-foreground">{benefit}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Perfect For
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {whoIsThisFor.map((audience, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
                >
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <p className="text-secondary-foreground">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get instant access to {title} and start optimizing your career today.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="shadow-medium hover:scale-105 transition-transform"
              asChild
            >
              <a href={gumroadUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Now for ${price}
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
