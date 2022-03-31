import logo from './logo.svg';
import './App.css';
import { jsx, ThemeProvider } from '@emotion/react'
import { Body, Title, SubTitle, Text, SplitHero, SplitHeroSide, MarenguTheme, fonts, HeroLeft, HeroRight } from '@stropical/marengu-ui'
import Project from './Project'


function App() {
  return (
      <>        
          <SplitHero>
              <HeroLeft>
                  <Title>ETHAN</Title>
                  <Title>MARREEL</Title>
                  <SubTitle> ROBOTICS ENGINEER  SOFTWARE DEVELOPER  WATER POLO PLAYER </SubTitle>
                  <p className="hero-desc typing typing-4sd typing-extra-fast">I am an aspiring software engineer looking for a will to live. I am on a mission to create exoskeleton and prosthetic technology never done before. I&apos;ve been developing software for 11 years, 3 with NodeJS, 5 with Unity. I am the head developer of the robotics team and teach kids how to code and use modern frameworks and technology.</p>
              </HeroLeft>
              <HeroRight>
                  <div className="project-box">
                   
                      <Project 
                          title="ROBOTICS (VEX)"
                          category="EMBEDDED C++ | LEADERSHIP"
                          description="Repo for this years VEX Robotics team 75491. Primarily developed by me, but in the proccess I lead a team of people to create their own. These people joined with zero expirience coding and ended developing and contributing functional code on Github."
                          date="SEPT. 2019 - CURRENT"
                          link="http://marreel.com"
                      />
                      <Project 
                          title="EXO ARM"
                          category="LINUX | C++ | FUSION"
                          description="An exoskeleton arm currently in development. Soft-body-nylon frame paired with a linear actuator for maximum comfort and mobility. Utilizes a hand built EMG circuit, and an Rasperry Pi running a C++ program to calculate output voltages."
                          date="MAR. 22 2022 - CURRENT"
                          link="http://marreel.com"
                      />
                      <Project 
                          title="ARC LANG"
                          category="TYPESCRIPT | LLVM"
                          description="A compiler aimed at working like typescript, but compiling down to LLVM IR to have bare metal speed. Very very simple programs work, but still a work in progress."
                          date="Mar. 1 2020"
                          link="http://marreel.com"
                      />
                      <Project 
                          title="VEX CORE DRIVETRAIN"
                          category="VEX C++"
                          description="Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards."
                          date="MAR. 1 2020"
                          link="http://MARreel.com"
                          yStart="3"
                          yEnd="5"
                          xStart="2"
                          xEnd="2"
                      />
                      <Project 
                          title="VEX CORE DRIVETRAIN"
                          category="VEX C++"
                          description="Drive train system for the official VEX Robotics VRC league. Utilizes a custom motor controller and a custom encoder. Designed to be used within competition standards."
                          date="MAR. 1 2020"
                          link="http://marreel.com"
                      />
                      <div className="prj-space"></div>
                  </div>
                </HeroRight>
              
          </SplitHero>
      </>
  );
}

export default App;
