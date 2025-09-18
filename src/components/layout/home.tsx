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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-accent/20">
              <AvatarImage src="/professional-doctor-headshot.png" alt="Dr. Sarah Johnson" />
              <AvatarFallback className="text-2xl font-semibold bg-muted">SJ</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Dr. Sarah Johnson</h1>
            <p className="text-xl text-secondary mb-6 font-medium">Cardiologist & Internal Medicine Specialist</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Dedicated to providing exceptional cardiac care with over 15 years of experience in preventive cardiology
              and advanced heart disease management.
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
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">About Dr. Johnson</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                Dr. Sarah Johnson is a board-certified cardiologist with extensive experience in both preventive and
                interventional cardiology. She completed her medical degree at Harvard Medical School and her cardiology
                fellowship at Johns Hopkins Hospital.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Her approach combines cutting-edge medical technology with compassionate patient care, focusing on
                personalized treatment plans that address each patient's unique needs and lifestyle.
              </p>
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
                  <span className="text-sm">sarah.johnson@medicenter.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-secondary" />
                  <span className="text-sm">www.drjohnsoncardiology.com</span>
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-accent" />
                  <CardTitle className="text-xl">Preventive Cardiology</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Comprehensive heart health assessments, risk factor management, and lifestyle counseling to prevent
                  cardiovascular disease.
                </CardDescription>
                <p className="text-sm text-accent font-medium mt-3">Starting at $200</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Activity className="h-8 w-8 text-accent" />
                  <CardTitle className="text-xl">Cardiac Imaging</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Advanced diagnostic imaging including echocardiograms, stress tests, and cardiac CT for accurate
                  diagnosis.
                </CardDescription>
                <p className="text-sm text-accent font-medium mt-3">Starting at $350</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Stethoscope className="h-8 w-8 text-accent" />
                  <CardTitle className="text-xl">Heart Disease Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Comprehensive treatment plans for coronary artery disease, heart failure, and arrhythmias with ongoing
                  monitoring.
                </CardDescription>
                <p className="text-sm text-accent font-medium mt-3">Consultation Required</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="h-8 w-8 text-accent" />
                  <CardTitle className="text-xl">Hypertension Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Specialized care for high blood pressure including medication management and lifestyle modifications.
                </CardDescription>
                <p className="text-sm text-accent font-medium mt-3">Starting at $150</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-accent" />
                  <CardTitle className="text-xl">Lipid Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Comprehensive cholesterol and lipid disorder treatment to reduce cardiovascular risk and improve heart
                  health.
                </CardDescription>
                <p className="text-sm text-accent font-medium mt-3">Starting at $180</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Activity className="h-8 w-8 text-accent" />
                  <CardTitle className="text-xl">Cardiac Rehabilitation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Post-cardiac event rehabilitation programs including exercise therapy and lifestyle counseling for
                  optimal recovery.
                </CardDescription>
                <p className="text-sm text-accent font-medium mt-3">Program-based pricing</p>
              </CardContent>
            </Card>
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
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full mt-2 relative z-10"></div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary">Senior Cardiologist</h3>
                    <Badge variant="secondary">2018 - Present</Badge>
                  </div>
                  <p className="text-secondary font-medium mb-2">Metropolitan Heart Institute</p>
                  <p className="text-muted-foreground text-pretty">
                    Leading a team of cardiac specialists in providing comprehensive cardiovascular care, with focus on
                    preventive cardiology and advanced heart failure management.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full mt-2 relative z-10"></div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary">Cardiology Fellowship</h3>
                    <Badge variant="secondary">2015 - 2018</Badge>
                  </div>
                  <p className="text-secondary font-medium mb-2">Johns Hopkins Hospital</p>
                  <p className="text-muted-foreground text-pretty">
                    Completed advanced fellowship training in interventional cardiology and cardiac imaging, with
                    research focus on preventive cardiovascular medicine.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full mt-2 relative z-10"></div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary">Internal Medicine Residency</h3>
                    <Badge variant="secondary">2012 - 2015</Badge>
                  </div>
                  <p className="text-secondary font-medium mb-2">Massachusetts General Hospital</p>
                  <p className="text-muted-foreground text-pretty">
                    Comprehensive internal medicine training with emphasis on cardiovascular medicine and
                    patient-centered care approaches.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full mt-2 relative z-10"></div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary">Doctor of Medicine (M.D.)</h3>
                    <Badge variant="secondary">2008 - 2012</Badge>
                  </div>
                  <p className="text-secondary font-medium mb-2">Harvard Medical School</p>
                  <p className="text-muted-foreground text-pretty">
                    Graduated Magna Cum Laude with research honors in cardiovascular physiology. Alpha Omega Alpha Honor
                    Medical Society member.
                  </p>
                </div>
              </div>
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
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Top Doctor Award</h3>
                    <p className="text-sm text-secondary mb-2">American Heart Association • 2023</p>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Recognized for outstanding contributions to preventive cardiology and patient care excellence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Research Excellence Award</h3>
                    <p className="text-sm text-secondary mb-2">Johns Hopkins Medical • 2022</p>
                    <p className="text-sm text-muted-foreground text-pretty">
                      For groundbreaking research in cardiac rehabilitation and lifestyle intervention programs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Patient Choice Award</h3>
                    <p className="text-sm text-secondary mb-2">Metropolitan Health System • 2021</p>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Highest patient satisfaction scores for three consecutive years in cardiology department.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Board Certification</h3>
                    <p className="text-sm text-secondary mb-2">American Board of Cardiology • 2018</p>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Board certified in cardiovascular disease and internal medicine with subspecialty certification.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            © 2024 Dr. Sarah Johnson, MD. All rights reserved. | Licensed Medical Professional
          </p>
        </div>
      </footer>
    </div>
  );
}
