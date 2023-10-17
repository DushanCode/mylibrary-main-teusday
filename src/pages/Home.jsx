import React from 'react';
import {
  AppSection,
  BlogSectionOld,
  BooksOld,
  CommunitySection,
  GetStartedOld,
  HeroSection,
  Libraries,
  LibrariesOld,
  MyLibraryCommunityOld,
  PostSectionOld,
  ReligiousSectionOld,
  StepsSection,
  TestimonialSection,
} from '../components';

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <StepsSection /> */}
      {/* <CommunitySection /> */}
      {/* <Libraries /> */}
      <BlogSectionOld />
      <MyLibraryCommunityOld />
      <LibrariesOld />


      <GetStartedOld />

      {/* <PostSectionOld /> */}
      <BooksOld />
      <ReligiousSectionOld />

      <AppSection />
      <TestimonialSection />

    </>
  );
};

export default Home;
