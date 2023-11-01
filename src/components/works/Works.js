/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portofolio', 
      description: `Designed and developed a ReactJS portofolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Secondhand Project', 
      description: `Last Project Bootcamp Team in Binar Academy, Create Secondhand Marketplace.`,
      alter: 'Secondhand Project',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'FishVenture Project', 
      description: `Logistics and Forwarding website built using
      ReactJS to design and develop its front-end.`,
      alter: 'FishVenture Project',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'coctail Project', 
      description: `A website coctail built using next JS to design and develop its Frontend`,
      alter: 'coctail Project',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: 'Sandyakala Tech', 
      description: `A website project for the Sandyakala business
      built using ReactJS.`,
      alter: 'Sandyakala Tech',
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};