import React from 'react';
import styled from 'styled-components';
import { FaRecycle, FaLeaf, FaWater, FaSun, FaTree, FaWind, FaSeedling, FaHandHoldingHeart } from 'react-icons/fa';

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const Section = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: rgba(30, 30, 30, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
  text-align: left;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 300px;
`;

const SectionImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #4CAF50;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
`;

const SectionTitle = styled.h2`
  color: #fff;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
`;

const SectionText = styled.p`
  color: #ccc;
  line-height: 1.8;
`;

const ConservationContent = () => {
  return (
    <ContentContainer>
      <Title>Save Our Earth for Future Generations</Title>
      
      <Section>
        <IconWrapper><FaRecycle /></IconWrapper>
        <SectionTitle>Reduce, Reuse, Recycle</SectionTitle>
        <SectionContent>
          <TextContent>
            <SectionText>
              Practice the three R's to minimize waste and conserve resources. Choose reusable items over disposable ones and properly sort your recyclables. Every small action counts towards a sustainable future.
            </SectionText>
          </TextContent>
          <ImageContainer>
            <SectionImage src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=500" alt="Recycling" />
          </ImageContainer>
        </SectionContent>
      </Section>

      <Section>
        <IconWrapper><FaLeaf /></IconWrapper>
        <SectionTitle>Protect Forests</SectionTitle>
        <SectionContent>
          <TextContent>
            <SectionText>
              Forests are vital for clean air and biodiversity. Support sustainable forestry practices and participate in tree-planting initiatives. Trees are our planet's natural air filters and provide habitat for countless species.
            </SectionText>
          </TextContent>
          <ImageContainer>
            <SectionImage src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500" alt="Forest" />
          </ImageContainer>
        </SectionContent>
      </Section>

      <Section>
        <IconWrapper><FaWater /></IconWrapper>
        <SectionTitle>Conserve Water</SectionTitle>
        <SectionContent>
          <TextContent>
            <SectionText>
              Fix leaks, take shorter showers, and use water-efficient appliances. Every drop counts in preserving this precious resource. Water is essential for all life on Earth, and we must protect our water sources.
            </SectionText>
          </TextContent>
          <ImageContainer>
            <SectionImage src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" alt="Water Conservation" />
          </ImageContainer>
        </SectionContent>
      </Section>

      <Section>
        <IconWrapper><FaSun /></IconWrapper>
        <SectionTitle>Use Renewable Energy</SectionTitle>
        <SectionContent>
          <TextContent>
            <SectionText>
              Switch to renewable energy sources like solar and wind power to reduce carbon emissions and combat climate change. Clean energy is the future, and it's becoming more accessible every day.
            </SectionText>
          </TextContent>
          <ImageContainer>
            <SectionImage src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500" alt="Solar Energy" />
          </ImageContainer>
        </SectionContent>
      </Section>

      <Section>
        <IconWrapper><FaTree /></IconWrapper>
        <SectionTitle>Plant More Trees</SectionTitle>
        <SectionContent>
          <TextContent>
            <SectionText>
              Trees absorb carbon dioxide and provide oxygen. Planting trees is one of the most effective ways to combat climate change and create a healthier environment. Join local tree-planting initiatives.
            </SectionText>
          </TextContent>
          <ImageContainer>
            <SectionImage src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500" alt="Tree Planting" />
          </ImageContainer>
        </SectionContent>
      </Section>

      <Section>
        <IconWrapper><FaWind /></IconWrapper>
        <SectionTitle>Reduce Carbon Footprint</SectionTitle>
        <SectionContent>
          <TextContent>
            <SectionText>
              Walk, bike, or use public transportation when possible. Reduce meat consumption and choose local, seasonal foods. Small changes in daily habits can make a big difference in reducing your carbon footprint.
            </SectionText>
          </TextContent>
          <ImageContainer>
            <SectionImage src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=500" alt="Carbon Footprint" />
          </ImageContainer>
        </SectionContent>
      </Section>

      <Section>
        <IconWrapper><FaSeedling /></IconWrapper>
        <SectionTitle>Sustainable Agriculture</SectionTitle>
        <SectionContent>
          <TextContent>
            <SectionText>
              Support local farmers and sustainable farming practices. Grow your own food when possible and choose organic options. Sustainable agriculture helps protect soil health and reduces environmental impact.
            </SectionText>
          </TextContent>
          <ImageContainer>
            <SectionImage src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=500" alt="Sustainable Agriculture" />
          </ImageContainer>
        </SectionContent>
      </Section>

      <Section>
        <IconWrapper><FaHandHoldingHeart /></IconWrapper>
        <SectionTitle>Wildlife Conservation</SectionTitle>
        <SectionContent>
          <TextContent>
            <SectionText>
              Protect endangered species and their habitats. Support wildlife conservation organizations and learn about local wildlife. Every species plays a vital role in maintaining ecosystem balance.
            </SectionText>
          </TextContent>
          <ImageContainer>
            <SectionImage src="https://images.unsplash.com/photo-1534567112713-379b3dabfa7e?w=500" alt="Wildlife Conservation" />
          </ImageContainer>
        </SectionContent>
      </Section>
    </ContentContainer>
  );
};

export default ConservationContent; 