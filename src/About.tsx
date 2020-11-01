import React, { useState, useEffect } from 'react';
import { useMediaQuery, useTheme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles ({
  aboutUsInput: {
    
  },
})

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

// when the about card listing is shown
// - start counting up until the max
// - don't recount when the user scrolls up and back down 

// count from 
const useTimedCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < 400) {
        setCount(count + 1);
      }
    }, 20);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return count;
}


const AboutUsCardListingHorizontal: React.FC<{count: number}> = ({ count }) => {
  return <div className={"About_Us_Card_Listing"}>
    <AboutUsCard title={`${Math.floor(count / 20)}`} subtitle={'YEARS OF EXPERIENCE'} />
    <AboutUsCard title={`${Math.floor(count)}`} subtitle={'PROJECTS DONE'} />
    <AboutUsCard title={`${Math.floor(count / 50)}`} subtitle={'TEAM'} />
    <AboutUsCard title={`${Math.floor(count / 1.052631578947368)}`} subtitle={'HAPPY CUSTOMERS'} />
  </div>
};

const AboutUsCardListingGrid: React.FC<{count: number}> = ({ count }) => {
  return <>
    <div className={"About_Us_Card_Listing"}>
      <AboutUsCard title={`${Math.floor(count / 20)}`} subtitle={'YEARS OF EXPERIENCE'} />
      <AboutUsCard title={`${Math.floor(count)}`} subtitle={'PROJECTS DONE'} />
    </div>
    <div className={"About_Us_Card_Listing"}>
      <AboutUsCard title={`${Math.floor(count / 50)}`} subtitle={'TEAM'} />
      <AboutUsCard title={`${Math.floor(count / 1.052631578947368)}`} subtitle={'HAPPY CUSTOMERS'} />
    </div>
  </>
};

const AboutUsForm  = () => {
  return <div style = {{display: "flex", flexDirection: "column" , padding: "16px", margin: "8px"}}>

      <p>BE PART OF OUR BUSINESS</p>
      <h1>Request A Quote</h1>
      <input placeholder = "First name"></input>
      <input placeholder = "Last name"></input>
      <input placeholder = "Email"></input>
      <input placeholder = "Phone"></input>
      <input className = "AboutUsMessage" placeholder = "Message ..." ></input>

  </div>
};

const AboutUsDescription = () => {
  return <div className= "about_us_paragragh">
          <p>We are a premier engineering company serving customers in the government and private sectors in worldwide. Our staff of engineers, architects and surveyors work with the highest innovative engineering techniques and scientific methods to provide high quality designs and practical solutions to our customers.</p>
        </div>

}

export const AboutUs: React.FC = () => {
  const count = useTimedCount();

  const theme = useTheme();
  const aboveLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const timedCount = useTimedCount();

  useEffect(() => {
    console.log(timedCount);
  }, [timedCount]);

  return <div style = {{display: "flex", }}>
    <AboutUsForm/>
    <div><AboutUsDescription />
      {aboveLarge
        ? <AboutUsCardListingHorizontal count={count}/>
        : <AboutUsCardListingGrid count={count}/>}
    </div>
  </div>
};
