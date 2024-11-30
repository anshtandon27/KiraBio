'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  DollarOutlined,
  SafetyCertificateOutlined,
  SearchOutlined,
  SyncOutlined,
  TeamOutlined,
  ToolOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Find Specialized Equipment Fast`,
      description: `Search and locate rare medical devices across a global network of healthcare providers and research institutions.`,
      icon: <SearchOutlined />,
    },
    {
      heading: `Verified Compliance`,
      description: `Every device comes with complete documentation and certification verification to ensure regulatory compliance.`,
      icon: <SafetyCertificateOutlined />,
    },
    {
      heading: `Flexible Acquisition Options`,
      description: `Choose between purchasing, renting, or leasing equipment to match your budget and timeline.`,
      icon: <DollarOutlined />,
    },
    {
      heading: `Device History Tracking`,
      description: `Access comprehensive maintenance records and usage history for complete transparency.`,
      icon: <SyncOutlined />,
    },
    {
      heading: `Secure Transactions`,
      description: `Protected payments and escrow services ensure safe and reliable transactions.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Custom Modifications`,
      description: `Request specialized modifications or custom fabrications to meet unique research needs.`,
      icon: <ToolOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Dr. Sarah Chen`,
      designation: `Research Director, Stanford Medical Center`,
      content: `"The marketplace helped us locate a rare imaging device that would have taken months to acquire through traditional channels. We had it operational in our lab within weeks."`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `James Wilson`,
      designation: `Equipment Manager, Mayo Clinic`,
      content: `"We've generated significant revenue by listing our specialized equipment during downtime. It's a win-win for everyone in the medical community."`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Dr. Michael Roberts`,
      designation: `Neurologist, Johns Hopkins Hospital`,
      content: `"The custom modification service was a game-changer for our rare disease research. We got exactly what we needed at a fraction of the cost."`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for small clinics and independent research labs`,
      monthly: 199,
      yearly: 1990,
      features: [
        `10% Transaction Fees`,
        `Basic Device Listings`,
        `Transaction Support`,
      ],
    },
    {
      title: `Professional`,
      description: `Ideal for mid-sized hospitals and specialized practices`,
      monthly: 499,
      yearly: 4990,
      features: [
        `Advanced Search Features`,
        `Custom Modifications`,
        `Recall Functionality`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `For large healthcare networks and university medical centers`,
      monthly: 999,
      yearly: 9990,
      features: [
        `Lower Transaction Fees`,
        `Optional Insurance Coverage`,
        `Dedicated Account Manager`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How do you ensure device safety and compliance?`,
      answer: `Every device undergoes rigorous verification of maintenance records, certifications, and regulatory compliance before being listed on our platform.`,
    },
    {
      question: `What payment methods are accepted?`,
      answer: `We accept all major credit cards, wire transfers, and purchase orders from verified institutions. All transactions are secured through our escrow service.`,
    },
    {
      question: `How long does the equipment verification process take?`,
      answer: `Typically 2-3 business days for standard equipment. Custom modifications may require additional review time.`,
    },
    {
      question: `Can I request specific modifications to equipment?`,
      answer: `Yes, our platform connects you with certified biomedical engineers who can modify equipment to meet your specific requirements.`,
    },
  ]

  const steps = [
    {
      heading: `List or Search`,
      description: `Post your specialized equipment or search our extensive database of rare medical devices.`,
    },
    {
      heading: `Verify and Connect`,
      description: `Review detailed device histories and connect with verified healthcare providers.`,
    },
    {
      heading: `Secure Transaction`,
      description: `Complete secure payments through our protected escrow service.`,
    },
    {
      heading: `Deploy and Use`,
      description: `Receive your equipment with full documentation and support for immediate deployment.`,
    },
  ]

  const painPoints = [
    {
      emoji: `🔍`,
      title: `Spending months searching for specialized equipment`,
    },
    {
      emoji: `💰`,
      title: `Valuable devices sitting idle while others need them`,
    },
    {
      emoji: `📋`,
      title: `Struggling with documentation and streamlined logistics`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transform How You Access Specialized Medical Equipment`}
        subtitle={`Connect with healthcare providers worldwide to buy, sell, or rent rare medical devices. Save time and resources while ensuring compliance.`}
        buttonText={`Get Started`}
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/sBLijH-kirabio-XkYv"
        socialProof={
          <LandingSocialRating
            avatarItems={[
              { src: 'https://randomuser.me/api/portraits/men/51.jpg' },
              { src: 'https://randomuser.me/api/portraits/women/9.jpg' },
              { src: 'https://randomuser.me/api/portraits/men/5.jpg' },
            ]}
            numberOfUsers={500}
            suffixText={`healthcare providers trust us`}
          />
        }
      />
      <LandingPainPoints
        title={`Unlocking the Value of Medical Equipment`}
        subtitle={`$765 Billion Worth of Specialized Medical Apparatus Sits Idle While Others Struggle to Find What They Need`}
        painPoints={painPoints}
        additionalContent={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '30px',
            }}
          >
            <h3
              style={{
                fontSize: '2em',
                fontWeight: 'bold',
                color: '#d9534f',
                margin: '0',
              }}
            >
              Key Insight
            </h3>
            <p
              style={{
                fontSize: '1.2em',
                textAlign: 'center',
                color: 'white',
                maxWidth: '600px',
              }}
            >
              Up to <strong>70%</strong> of medical equipment in developing
              countries lies unused. Our mission is to connect providers with
              those in need, ensuring that every device finds its purpose.
            </p>
          </div>
        }
      />
      <LandingHowItWorks
        title={`Enabling Efficient Equipment Solutions`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Everything You Need to Streamline Medical Device Access`}
        subtitle={`KiraBio's comprehensive platform helps you find, verify, and acquire specialized equipment efficiently.`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Hundreds of Healthcare Providers Already Transforming Their Equipment Access`}
        subtitle={`See how our platform is making a difference in research and patient care.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Choose the Perfect Plan for Your Institution`}
        subtitle={`Flexible options to match your equipment needs and budget`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions About Our Platform`}
        subtitle={`Everything you need to know about using our medical device marketplace`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Start Transforming Your Medical Equipment Access Today`}
        subtitle={`Join our growing network of healthcare providers and research institutions`}
        buttonText={`Create Your Account`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
