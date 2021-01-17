import React, { useState, useEffect } from 'react';
import { useMediaQuery, useTheme, makeStyles, Theme } from '@material-ui/core';
import {ReactSVG} from 'react-svg'

interface CardStyleProps {
  grid?: boolean,
}

const useStyles = makeStyles({
  aboutUsInput: { 
    paddingBottom : "12px" ,
    paddingTop: "2px",
    margin : "8px"
  },
  title:{
    margin:"2px",
    fontSize: "20px" ,
    textAlign: "center",
  },
  // aboutUsForm:{
  //   display: "flex", flexDirection: "column" , padding: "16px", margin: "8px",
  // },
  AboutUsSvg:{
    width:"70px",height:"70px",
  }
});

const useCardStyles = makeStyles<Theme, CardStyleProps>((theme: Theme) => ({
  aboutUsCard: ({ grid }) => ({
    border: '0.01rem solid',
    borderRadius: '3px',
    textAlign: 'center',
    width: grid ? '40%' : '20%',
    maxWidth: '200px',
    marginBottom: '10px',
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    paddingTop: "4px",
    justifyContent: "center",

  }),
}));
const AboutUsSvg: React.FC <{
  path: string,
}>= ({path})=> (<ReactSVG className={useStyles().AboutUsSvg} src= {path} />)
const AboutUsCard: React.FC <{
  title: string,
  subtitle: string,
  svg: React.ReactElement ,
  className: string,
}> = ({ title, svg, subtitle, className }) => (
  <div className={className}>
    {svg}
    <p className={"About_Us_Card_Title"}>{title}</p>
    <p className={"About_Us_Card_Subtitle"}>{subtitle}</p>
    </div>
);

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
  const styles = useCardStyles({
    grid: false,
  });
 
  return <div className={"About_Us_Card_Listing"}>
    <AboutUsCard title={`${Math.floor(count / 20)}`}
     svg={<AboutUsSvg path= "svg/knowledge.svg"/>} subtitle={'YEARS OF EXPERIENCE'} className={styles.aboutUsCard}/>
    <AboutUsCard title={`${Math.floor(count)}`}
     svg={<AboutUsSvg path= "svg/building.svg"/>} subtitle={'PROJECTS DONE'} className={styles.aboutUsCard}/>
    <AboutUsCard title={`${Math.floor(count / 50)}`} 
     svg={<AboutUsSvg path= "svg/group.svg"/>}subtitle={'TEAM'} className={styles.aboutUsCard}/>
    <AboutUsCard title={`${Math.floor(count / 1.052631578947368)}`}
     svg={<AboutUsSvg path= "svg/rating.svg"/>} subtitle={'HAPPY CUSTOMERS'} className={styles.aboutUsCard}/>
  </div>
};

const AboutUsCardListingGrid: React.FC<{count: number}> = ({ count }) => {
  const styles = useCardStyles({
    grid: true,
  });
  
  return <>
    <div className={"About_Us_Card_Listing"}>
      <AboutUsCard title={`${Math.floor(count / 20)}`} svg={<AboutUsSvg path= "svg/knowledge.svg"/>} subtitle={'YEARS OF EXPERIENCE'} className={styles.aboutUsCard}/>
      <AboutUsCard title={`${Math.floor(count)}`} svg={<AboutUsSvg path= "svg/building.svg"/>} subtitle={'PROJECTS DONE'} className={styles.aboutUsCard}/>
    </div>
    <div className={"About_Us_Card_Listing"}>
      <AboutUsCard title={`${Math.floor(count / 50)}`} svg={<AboutUsSvg path= "svg/group.svg"/>} subtitle={'TEAM'} className={styles.aboutUsCard}/>
      <AboutUsCard title={`${Math.floor(count / 1.052631578947368)}`} svg={<AboutUsSvg path= "svg/rating.svg"/>} subtitle={'HAPPY CUSTOMERS'} className={styles.aboutUsCard}/>
    </div>
  </>
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

  return <div id = "about" style = {{display: "flex", }}>
      <div><AboutUsDescription />
      {aboveLarge
        ? <AboutUsCardListingHorizontal count={count}/>
        : <AboutUsCardListingGrid count={count}/>}
    </div>
  </div>
};
