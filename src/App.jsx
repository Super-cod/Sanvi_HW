import React, { useState } from 'react';
import styled from 'styled-components';
import Earth from './components/Earth';
import ConservationContent from './components/ConservationContent';
import { Leaf, Droplets, Zap, Trees, Recycle, Sun, Wind, Cloud } from 'lucide-react';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.header`
  background-color: rgba(20, 20, 20, 0.95);
  padding: 1.5rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4CAF50;
  text-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #4CAF50;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #4CAF50;
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  min-height: 80vh;
  padding: 80px 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-margin-top: 80px;
`;

const HeroSection = styled(Section)`
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6));
  text-align: center;
  min-height: 100vh;
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(76, 175, 80, 0.3);

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #ccc;
  max-width: 1000px;
  margin: 0 auto 3rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

const EarthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
  transform: scale(1.2);

  @media (max-width: 768px) {
    transform: scale(0.9);
  }

  @media (max-width: 480px) {
    transform: scale(0.7);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
  }
`;

const ContentBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const BoxTitle = styled.h2`
  font-size: 2.2rem;
  color: #4CAF50;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const BoxContent = styled.p`
  color: #ccc;
  line-height: 1.8;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const BoxList = styled.ul`
  color: #ccc;
  line-height: 1.8;
  font-size: 1.2rem;
  padding-left: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  li {
    margin-bottom: 0.8rem;
    position: relative;
    
    &:before {
      content: '•';
      color: #4CAF50;
      font-weight: bold;
      display: inline-block; 
      width: 1em;
      margin-left: -1em;
    }
  }
`;

const StatsSection = styled(Section)`
  background: rgba(20, 20, 20, 0.95);
  padding: 4rem 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  color: #ccc;
  font-size: 1.2rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FeaturesSection = styled(Section)`
  background: rgba(0, 0, 0, 0.95);
  padding: 4rem 2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4CAF50;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FeatureDescription = styled.p`
  color: #ccc;
  line-height: 1.8;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CtaSection = styled(Section)`
  text-align: center;
  background: linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1));
`;

const CtaButton = styled.button`
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
  }
`;

const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.95);
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const FooterText = styled.p`
  color: #ccc;
  margin-bottom: 1rem;
`;

const FooterSignature = styled.div`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 2rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppContainer>
      <Header>
        <HeaderContent>
          <Logo>
            <Leaf size={28} />
            EcoFuture
          </Logo>
          <Nav>
            <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('impact')}>Impact</NavLink>
            <NavLink onClick={() => scrollToSection('content')}>Content</NavLink>
          </Nav>
        </HeaderContent>
      </Header>

      <HeroSection id="home">
        <HeroTitle>Conserve Today for Tomorrow's Future</HeroTitle>
        <HeroSubtitle>
          Our planet's natural resources are precious and finite. By taking conscious steps today, 
          we can ensure a sustainable future for generations to come. Join our global movement to 
          protect Earth's ecosystems through innovative conservation strategies and community action.
        </HeroSubtitle>
        <EarthWrapper>
          <Earth />
        </EarthWrapper>

      </HeroSection>

      <Section id="about">
        <ContentGrid>
          <ContentBox>
            <BoxTitle>Our Mission</BoxTitle>
            <BoxContent>
              To empower communities worldwide with knowledge and tools for effective resource conservation,
              creating a sustainable balance between human needs and environmental preservation. We believe 
              in the power of education, innovation, and collective action to transform our relationship 
              with the planet.
            </BoxContent>
            <BoxList>
              <li>Develop scalable conservation solutions for diverse ecosystems</li>
              <li>Bridge scientific research with practical community applications</li>
              <li>Create global networks of conservation champions and educators</li>
              <li>Implement measurable impact tracking for all initiatives</li>
            </BoxList>
          </ContentBox>
          <ContentBox>
            <BoxTitle>Our Vision</BoxTitle>
            <BoxContent>
              A world where humanity thrives in harmony with nature, where sustainable practices 
              are integrated into every aspect of society, and where biodiversity flourishes for 
              future generations. We envision communities that are resilient, self-sufficient, 
              and deeply connected to their natural environments.
            </BoxContent>
            <BoxList>
              <li>Global adoption of circular economy principles by 2040</li>
              <li>Restoration of 500 million hectares of degraded land by 2035</li>
              <li>Empowerment of 10,000 conservation leaders annually</li>
              <li>Development of climate-resilient communities worldwide</li>
            </BoxList>
          </ContentBox>
        </ContentGrid>
      </Section>

      <StatsSection id="impact">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', color: '#4CAF50' }}>
          Our Global Conservation Impact
        </h2>
        <StatsGrid>
          <StatCard>
            <StatNumber>30%</StatNumber>
            <StatLabel>Water Savings Through Conservation Efforts</StatLabel>
            <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>
              Across 120 communities in 15 countries
            </p>
          </StatCard>
          <StatCard>
            <StatNumber>40%</StatNumber>
            <StatLabel>Energy Reduction in Participating Communities</StatLabel>
            <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>
              Equivalent to removing 500,000 cars from roads
            </p>
          </StatCard>
          <StatCard>
            <StatNumber>35%</StatNumber>
            <StatLabel>Waste Reduction Through Recycling Programs</StatLabel>
            <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>
              Diverting 2.5 million tons from landfills annually
            </p>
          </StatCard>
          <StatCard>
            <StatNumber>25%</StatNumber>
            <StatLabel>Carbon Footprint Reduction in Target Areas</StatLabel>
            <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem' }}>
              Meeting Paris Agreement targets ahead of schedule
            </p>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <Section id="content">
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>
              <Sun size={40} />
            </FeatureIcon>
            <FeatureTitle>Renewable Energy</FeatureTitle>
            <FeatureDescription>
              Transitioning to solar, wind, and geothermal power sources reduces our carbon footprint 
              while creating sustainable energy independence. Our community solar programs have installed 
              25,000 panels across urban areas, providing clean energy to 50,000 households and reducing 
              emissions by 120,000 tons annually.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <Droplets size={40} />
            </FeatureIcon>
            <FeatureTitle>Water Conservation</FeatureTitle>
            <FeatureDescription>
              Implementing smart irrigation, rainwater harvesting, and water recycling systems preserves 
              our most vital resource. Our watershed protection initiatives have restored 45 river systems, 
              benefiting 2 million people with improved water quality and availability during drought seasons.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <Trees size={40} />
            </FeatureIcon>
            <FeatureTitle>Forest Protection</FeatureTitle>
            <FeatureDescription>
              Preserving old-growth forests while implementing sustainable reforestation creates carbon sinks 
              and protects biodiversity. Our forest guardians program has trained 1,200 local stewards who 
              monitor and protect 750,000 hectares of critical forest habitat across three continents.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <Recycle size={40} />
            </FeatureIcon>
            <FeatureTitle>Circular Economy</FeatureTitle>
            <FeatureDescription>
              Transforming waste into resources through innovative recycling and upcycling programs reduces 
              landfill burden and creates economic opportunities. Our materials recovery facilities process 
              15,000 tons monthly, with 92% diversion rates and creation of 850 green jobs in underserved 
              communities.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <Wind size={40} />
            </FeatureIcon>
            <FeatureTitle>Sustainable Agriculture</FeatureTitle>
            <FeatureDescription>
              Regenerative farming practices restore soil health, increase biodiversity, and sequester carbon 
              while producing nutritious food. We've transitioned 250,000 acres to regenerative methods, 
              improving yields by 18% while reducing chemical inputs by 75% and water usage by 40%.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <Cloud size={40} />
            </FeatureIcon>
            <FeatureTitle>Climate Education</FeatureTitle>
            <FeatureDescription>
              Empowering communities with knowledge about climate science and practical adaptation strategies 
              builds resilience. Our educational programs reach 500,000 students annually through school 
              partnerships, community workshops, and digital learning platforms in 8 languages.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Section>



      <Footer>
        <FooterContent>
          <FooterLogo>
            <Leaf size={43} />
            EcoFuture
          </FooterLogo>

          <FooterSignature>
            — Sanvi Kapoor
          </FooterSignature>
        </FooterContent>
      </Footer>
    </AppContainer>
  );
};

export default App;