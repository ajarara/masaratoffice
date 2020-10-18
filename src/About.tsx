import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';

const AboutUsCard: React.FC <{
  title: string,
  subtitle: string,
}> = ({ title, subtitle }) => (
  <div className={"About_Us_Card"}>
    <p className={"About_Us_Card_Title"}>{title}</p>
    <p className={"About_Us_Card_Subtitle"}>{subtitle}</p>
    </div>
);

const details = [
  {
    title: '20',
    subtitle: 'YEARS OF EXPERIENCE',
  },
  {
    title: '400',
    subtitle: 'PROJECTS DONE',
  },
  {
    title: '8',
    subtitle: 'TEAM',
  },
  {
    title: '380',
    subtitle: 'HAPPY CUSTOMERS'
  }
];

const AboutUsCardListingHorizontal = () => {
  return <div className={"About_Us_Card_Listing"}>
    <AboutUsCard title={'20'} subtitle={'YEARS OF EXPERIENCE'} />
    <AboutUsCard title={'400'} subtitle={'PROJECTS DONE'} />
    <AboutUsCard title={'8'} subtitle={'TEAM'} />
    <AboutUsCard title={'380'} subtitle={'HAPPY CUSTOMERS'} />
  </div>
};

const AboutUsCardListingGrid = () => {
  return <>
    <div className={"About_Us_Card_Listing"}>
      <AboutUsCard title={'20'} subtitle={'YEARS OF EXPERIENCE'} />
      <AboutUsCard title={'400'} subtitle={'PROJECTS DONE'} />
    </div>
    <div className={"About_Us_Card_Listing"}>
      <AboutUsCard title={'8'} subtitle={'TEAM'} />
      <AboutUsCard title={'380'} subtitle={'HAPPY CUSTOMERS'} />
    </div>
  </>
};

const AboutUsForm = () => {
  return <></>
};

const AboutUsDescription = () => {
  return <div className= "about_us_paragragh">
          <p>We are a premier engineering company serving customers in the government and private sectors in worldwide. Our staff of engineers, architects and surveyors work with the highest innovative engineering techniques and scientific methods to provide high quality designs and practical solutions to our customers.</p>
        </div>

}

export const AboutUs = () => {
  const theme = useTheme();
  const aboveLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return <>
    <AboutUsDescription />
    {aboveLarge
      ? <AboutUsCardListingHorizontal />
      : <AboutUsCardListingGrid />}
  </>
};
