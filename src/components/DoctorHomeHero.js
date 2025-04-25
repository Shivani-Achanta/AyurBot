// import * as React from "react";
// import styled from "styled-components";

// interface ServiceCardProps {
//   imageSrc: string;
//   title: string;
//   description: string;
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => (
//   <ServiceCardWrapper>
//     <ServiceImage src={imageSrc} alt={title} loading="lazy" />
//     <ServiceTitle>{title}</ServiceTitle>
//     <ServiceDescription>{description}</ServiceDescription>
//   </ServiceCardWrapper>
// );

// const services = [
//   {
//     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cae42ed6c9c2ac8ad9355ef31c43d203dcc16868ab08f9e5ee816ab2a00f404c?apiKey=370ce3c2a20944c1b14e584940571da5&",
//     title: "Consult with an Ayurvedic doctor",
//     description: "$60/consultation. 7-day money-back guarantee",
//   },
//   {
//     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c663fcc5ef87c7f6c04a967d82aacdc50a40d70ca65f25208de5a718f01ff76?apiKey=370ce3c2a20944c1b14e584940571da5&",
//     title: "Get personalized herbal remedies",
//     description: "Starting at $29/month",
//   },
//   {
//     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6b77e3b43c9018e7b22bf9413c880f18ba10836f5fefd30a4a988ef589f662a?apiKey=370ce3c2a20944c1b14e584940571da5&",
//     title: "Chat with our Ayurveda bot",
//     description: "Free, 24/7",
//   },
//   {
//     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/32970d557b4141f1bccf4114b0b676be9619dde205344d1bb978ca721ea14533?apiKey=370ce3c2a20944c1b14e584940571da5&",
//     title: "Explore About Prakriti",
//     description: "",
//   },
// ];

// const AyurvedaLandingPage: React.FC = () => (
//   <PageWrapper>
//     <HeroSection>
//       <HeroBackground src="https://cdn.builder.io/api/v1/image/assets/TEMP/29f2ba47b265ce06847103dc21ac179fe0270661da2cfb31e16f00b58195e98e?apiKey=370ce3c2a20944c1b14e584940571da5&" alt="Ayurveda background" loading="lazy" />
//       <HeroContent>
//         <HeroTitle>Welcome to AyurVeda</HeroTitle>
//         <HeroDescription>
//           Your personal guide to Ayurvedic health, with expert consultations and natural remedies
//         </HeroDescription>
//       </HeroContent>
//     </HeroSection>
//     <FeaturedServicesSection>
//       <SectionTitle>Featured Services</SectionTitle>
//       <ServicesGrid>
//         {services.map((service, index) => (
//           <ServiceCard key={index} {...service} />
//         ))}
//       </ServicesGrid>
//     </FeaturedServicesSection>
//   </PageWrapper>
// );

// const PageWrapper = styled.div`
//   align-items: center;
//   background-color: #f7fafc;
//   display: flex;
//   flex-direction: column;
//   padding: 36px 80px 80px;

//   @media (max-width: 991px) {
//     padding: 0 20px;
//   }
// `;

// const HeroSection = styled.section`
//   border-radius: 12px;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   max-width: 960px;
//   min-height: 480px;
//   overflow: hidden;
//   padding: 80px 56px;
//   position: relative;
//   width: 100%;

//   @media (max-width: 991px) {
//     padding: 40px 20px;
//   }
// `;

// const HeroBackground = styled.img`
//   height: 100%;
//   inset: 0;
//   object-fit: cover;
//   object-position: center;
//   position: absolute;
//   width: 100%;
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 1;
// `;

// const HeroTitle = styled.h1`
//   font: 900 48px Inter, sans-serif;
//   font-feature-settings: "dlig" on;
//   letter-spacing: -1.58px;
//   margin-bottom: 8px;

//   @media (max-width: 991px) {
//     font-size: 40px;
//   }
// `;

// const HeroDescription = styled.p`
//   font: 400 16px/150% Inter, sans-serif;
//   font-feature-settings: "dlig" on;
// `;

// const FeaturedServicesSection = styled.section`
//   margin: 36px auto 0;
//   max-width: 960px;
//   padding: 16px;
//   width: 100%;
// `;

// const SectionTitle = styled.h2`
//   color: #0d171c;
//   font: 700 22px Inter, sans-serif;
//   font-feature-settings: "dlig" on;
//   letter-spacing: -0.33px;
//   margin-bottom: 12px;
// `;

// const ServicesGrid = styled.div`
//   display: grid;
//   gap: 20px;
//   grid-template-columns: repeat(4, 1fr);

//   @media (max-width: 991px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ServiceCardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ServiceImage = styled.img`
//   aspect-ratio: 1;
//   object-fit: cover;
//   object-position: center;
//   width: 100%;
// `;

// const ServiceTitle = styled.h3`
//   color: #0d171c;
//   font: 500 16px/24px Inter, sans-serif;
//   font-feature-settings: "dlig" on;
//   margin-top: 12px;
// `;

// const ServiceDescription = styled.p`
//   color: #4f8096;
//   font: 400 14px/21px Inter, sans-serif;
//   font-feature-settings: "dlig" on;
// `;

// export default AyurvedaLandingPage;

import React from "react";
import styled from "styled-components";

function AyurVedaLandingPage() {
  return (
    <StyledPage>
      <HeaderSection>
        <HeroImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29f2ba47b265ce06847103dc21ac179fe0270661da2cfb31e16f00b58195e98e?apiKey=370ce3c2a20944c1b14e584940571da5&"
          alt="AyurVeda Landing"
        />
        <HeroContent>
          <Title>Welcome to AyurBot</Title>
          <Description>
            Your personal guide to Ayurvedic health, with expert consultations
            and natural remedies
          </Description>
          {/* <SearchForm aria-label="Search">
            <Label htmlFor="searchInput" className="visually-hidden">
              Search for a condition, symptom, or treatment
            </Label>
            <SearchField
              id="searchInput"
              placeholder="Search for a condition, symptom, or treatment"
              aria-label="Search for a condition, symptom, or treatment"
            />
            <SubmitButton>Submit</SubmitButton>
          </SearchForm> */}
        </HeroContent>
      </HeaderSection>
      <MainContent>
        <FeaturedServices>Featured Services</FeaturedServices>
        <ServicesList>
          <Service>
            <ServiceImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cae42ed6c9c2ac8ad9355ef31c43d203dcc16868ab08f9e5ee816ab2a00f404c?apiKey=370ce3c2a20944c1b14e584940571da5&"
              alt="Consult with an Ayurvedic doctor"
            />
            <ServiceTitle>Consult with an Ayurvedic doctor</ServiceTitle>
          </Service>
          {/* <Service>
            <ServiceImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c663fcc5ef87c7f6c04a967d82aacdc50a40d70ca65f25208de5a718f01ff76?apiKey=370ce3c2a20944c1b14e584940571da5&"
              alt="Get personalized herbal remedies"
            />
            <ServiceTitle>Get personalized herbal remedies</ServiceTitle>
            <ServicePrice>Starting at $29/month</ServicePrice>
          </Service> */}
          <Service>
            <ServiceImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6b77e3b43c9018e7b22bf9413c880f18ba10836f5fefd30a4a988ef589f662a?apiKey=370ce3c2a20944c1b14e584940571da5&"
              alt="Chat with our Ayurveda bot"
            />
            <ServiceTitle>Chat with our Ayurveda bot</ServiceTitle>
          </Service>
          <Service>
            <ServiceImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32970d557b4141f1bccf4114b0b676be9619dde205344d1bb978ca721ea14533?apiKey=370ce3c2a20944c1b14e584940571da5&"
              alt="Explore About Prakriti"
            />
            <ServiceTitle>Explore About Prakriti</ServiceTitle>
          </Service>
        </ServicesList>
        {/* <CategoriesSection>
          <CategoryTitle>Top Categories</CategoryTitle>
          <CategoriesList>
            <CategoryItem>Stress & Anxiety</CategoryItem>
            <CategoryItem>Digestion</CategoryItem>
            <CategoryItem>Sleep</CategoryItem>
            <CategoryItem>Energy</CategoryItem>
            <CategoryItem>Skin</CategoryItem>
            <CategoryItem>Women's Health</CategoryItem>
          </CategoriesList>
        </CategoriesSection> */}
        {/* <PromoSection>
          <Promotion>
            Get $20 off your first consultation
            <PromoCode>Use code FIRST20 at checkout</PromoCode>
          </Promotion>
          <PromoButton>Start now</PromoButton>
        </PromoSection> */}
      </MainContent>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }

  @media (min-width: 1024px) {
    padding: 20px 80px;
  }
`;

const HeaderSection = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
`;

const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px 40px 24px;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: 900;
  font-size: 48px;
  margin-top: 202px;
`;

const Description = styled.p`
  color: #fff;
  line-height: 150%;
  margin-top: 8px;
`;

// const SearchForm = styled.form`
//   display: flex;
//   margin-top: 32px;
//   background-color: #f7fafc;
//   border-radius: 12px;
//   padding: 8px 11px;
// `;

// const Label = styled.label`
//   font-size: 0;
//   visibility: hidden;
//   height: 0;
//   width: 0;
// `;

// const SearchField = styled.input`
//   flex-grow: 1;
//   border: none;
//   background-color: transparent;
//   padding-left: 22px;
// `;

// const SubmitButton = styled.button`
//   background-color: #1aa3e5;
//   border: none;
//   color: #f7fafc;
//   padding: 12px 20px;
//   border-radius: 12px;
//   cursor: pointer;
// `;

const MainContent = styled.main``;

const FeaturedServices = styled.h2`
  margin-top: 36px;
  font-weight: 700;
  font-size: 22px;
`;

const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 12px;
  justify-content: center;
`;

const Service = styled.div`
  flex-basis: calc(25% - 20px);
  display: flex;
  flex-direction: column;
`;

const ServiceImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
`;

const ServiceTitle = styled.h3`
  margin-top: 12px;
  font-weight: 500;
`;

const ServicePrice = styled.p`
  color: #4f8096;
`;

const CategoriesSection = styled.section``;

const CategoryTitle = styled.h2`
  font-weight: 700;
  font-size: 22px;
  margin-top: 20px;
`;

const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  padding: 12px 80px 12px 12px;
  margin-top: 12px;
`;

// const CategoryItem = styled.div`
//   background-color: #e8f0f2;
//   border-radius: 12px;
//   padding: 6px 16px;
// `;

// const PromoSection = styled.section`
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid #d1dee8;
//   border-radius: 12px;
//   background-color: #f7fafc;
//   padding: 21px 20px;
//   margin-top: 16px;
// `;

// const Promotion = styled.div`
//   font-weight: 700;
// `;

// const PromoCode = styled.p`
//   color: #4f8096;
//   margin-top: 4px;
// `;

// const PromoButton = styled.button`
//   background-color: #1aa3e5;
//   border: none;
//   color: #f7fafc;
//   padding: 6px 16px;
//   border-radius: 12px;
//   cursor: pointer;
// `;

export default AyurVedaLandingPage;
