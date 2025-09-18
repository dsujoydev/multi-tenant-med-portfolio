import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Stethoscope,
  Heart,
  Brain,
  Activity,
  LucideIcon,
} from "lucide-react";

export interface DoctorData {
  firstName: string;
  lastName: string;
  specialty: string;
  description: string;
  avatarUrl?: string;
  email: string;
  phone: string;
  website: string;
  aboutTitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
  services: Array<{
    title: string;
    description: string;
    pricing: string;
    icon: string;
  }>;
  experiences: Array<{
    title: string;
    period: string;
    institution: string;
    description: string;
    type: "experience" | "education";
  }>;
  awards: Array<{
    title: string;
    organization: string;
    year: string;
    description: string;
  }>;
}

interface HomeProps {
  doctor?: DoctorData;
}

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Activity,
  Stethoscope,
  Brain,
};

export default function Home({ doctor }: HomeProps) {
  // Default doctor data for demonstration
  const defaultDoctor: DoctorData = {
    firstName: "Sarah",
    lastName: "Johnson",
    specialty: "Cardiologist & Internal Medicine Specialist",
    description:
      "Dedicated to providing exceptional cardiac care with over 15 years of experience in preventive cardiology and advanced heart disease management.",
    avatarUrl: "/professional-doctor-headshot.png",
    email: "sarah.johnson@medicenter.com",
    phone: "(555) 123-4567",
    website: "www.drjohnsoncardiology.com",
    aboutTitle: "About Dr. Johnson",
    aboutDescription1:
      "Dr. Sarah Johnson is a board-certified cardiologist with extensive experience in both preventive and interventional cardiology. She completed her medical degree at Harvard Medical School and her cardiology fellowship at Johns Hopkins Hospital.",
    aboutDescription2:
      "Her approach combines cutting-edge medical technology with compassionate patient care, focusing on personalized treatment plans that address each patient's unique needs and lifestyle.",
    services: [
      {
        title: "Preventive Cardiology",
        description:
          "Comprehensive heart health assessments, risk factor management, and lifestyle counseling to prevent cardiovascular disease.",
        pricing: "Starting at $200",
        icon: "Heart",
      },
      {
        title: "Cardiac Imaging",
        description:
          "Advanced diagnostic imaging including echocardiograms, stress tests, and cardiac CT for accurate diagnosis.",
        pricing: "Starting at $350",
        icon: "Activity",
      },
      {
        title: "Heart Disease Management",
        description:
          "Comprehensive treatment plans for coronary artery disease, heart failure, and arrhythmias with ongoing monitoring.",
        pricing: "Consultation Required",
        icon: "Stethoscope",
      },
      {
        title: "Hypertension Management",
        description:
          "Specialized care for high blood pressure including medication management and lifestyle modifications.",
        pricing: "Starting at $150",
        icon: "Brain",
      },
      {
        title: "Lipid Management",
        description:
          "Comprehensive cholesterol and lipid disorder treatment to reduce cardiovascular risk and improve heart health.",
        pricing: "Starting at $180",
        icon: "Heart",
      },
      {
        title: "Cardiac Rehabilitation",
        description:
          "Post-cardiac event rehabilitation programs including exercise therapy and lifestyle counseling for optimal recovery.",
        pricing: "Program-based pricing",
        icon: "Activity",
      },
    ],
    experiences: [
      {
        title: "Senior Cardiologist",
        period: "2018 - Present",
        institution: "Metropolitan Heart Institute",
        description:
          "Leading a team of cardiac specialists in providing comprehensive cardiovascular care, with focus on preventive cardiology and advanced heart failure management.",
        type: "experience",
      },
      {
        title: "Cardiology Fellowship",
        period: "2015 - 2018",
        institution: "Johns Hopkins Hospital",
        description:
          "Completed advanced fellowship training in interventional cardiology and cardiac imaging, with research focus on preventive cardiovascular medicine.",
        type: "experience",
      },
      {
        title: "Internal Medicine Residency",
        period: "2012 - 2015",
        institution: "Massachusetts General Hospital",
        description:
          "Comprehensive internal medicine training with emphasis on cardiovascular medicine and patient-centered care approaches.",
        type: "experience",
      },
      {
        title: "Doctor of Medicine (M.D.)",
        period: "2008 - 2012",
        institution: "Harvard Medical School",
        description:
          "Graduated Magna Cum Laude with research honors in cardiovascular physiology. Alpha Omega Alpha Honor Medical Society member.",
        type: "education",
      },
    ],
    awards: [
      {
        title: "Top Doctor Award",
        organization: "American Heart Association",
        year: "2023",
        description: "Recognized for outstanding contributions to preventive cardiology and patient care excellence.",
      },
      {
        title: "Research Excellence Award",
        organization: "Johns Hopkins Medical",
        year: "2022",
        description: "For groundbreaking research in cardiac rehabilitation and lifestyle intervention programs.",
      },
      {
        title: "Patient Choice Award",
        organization: "Metropolitan Health System",
        year: "2021",
        description: "Highest patient satisfaction scores for three consecutive years in cardiology department.",
      },
      {
        title: "Board Certification",
        organization: "American Board of Cardiology",
        year: "2018",
        description: "Board certified in cardiovascular disease and internal medicine with subspecialty certification.",
      },
    ],
  };

  const currentDoctor = doctor || defaultDoctor;
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-accent/20">
              <AvatarImage
                src={currentDoctor.avatarUrl}
                alt={`Dr. ${currentDoctor.firstName} ${currentDoctor.lastName}`}
              />
              <AvatarFallback className="text-2xl font-semibold bg-muted">
                {currentDoctor.firstName[0]}
                {currentDoctor.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">
              Dr. {currentDoctor.firstName} {currentDoctor.lastName}
            </h1>
            <p className="text-xl text-secondary mb-6 font-medium">{currentDoctor.specialty}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              {currentDoctor.description}
            </p>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
        </div>
      </section>

      <Separator className="my-8" />

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">{currentDoctor.aboutTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                {currentDoctor.aboutDescription1}
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">{currentDoctor.aboutDescription2}</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span className="text-sm">{currentDoctor.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-sm">{currentDoctor.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-secondary" />
                  <span className="text-sm">{currentDoctor.website}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Medical Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentDoctor.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Heart;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-8 w-8 text-accent" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-pretty">{service.description}</CardDescription>
                    <p className="text-sm text-accent font-medium mt-3">{service.pricing}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Experience & Education Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Experience & Education</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>

            <div className="space-y-8">
              {currentDoctor.experiences.map((experience, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full mt-2 relative z-10"></div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-primary">{experience.title}</h3>
                      <Badge variant="secondary">{experience.period}</Badge>
                    </div>
                    <p className="text-secondary font-medium mb-2">{experience.institution}</p>
                    <p className="text-muted-foreground text-pretty">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Awards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentDoctor.awards.map((award, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {index % 2 === 0 ? (
                      <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    ) : (
                      <GraduationCap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{award.title}</h3>
                      <p className="text-sm text-secondary mb-2">
                        {award.organization} • {award.year}
                      </p>
                      <p className="text-sm text-muted-foreground text-pretty">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 text-balance">
            Ready to Take Control of Your Heart Health?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
            Schedule a consultation today to discuss your cardiovascular health and develop a personalized treatment
            plan that fits your lifestyle and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Dr. {currentDoctor.firstName} {currentDoctor.lastName}, MD. All rights reserved. | Licensed Medical
            Professional
          </p>
        </div>
      </footer>
    </div>
  );
}
