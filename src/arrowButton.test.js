import React, { Component } from'react';
import PropTypes from "prop-types";
import { render, cleanup, fireEvent } from '@testing-library/react'
import Groups from "./screens/groups";
import Players from "./screens/players";
import LiveFixtures from "./screens/liveFixtures";
import { shallow } from 'enzyme';
import {ReactLogo} from 'react-share';
import { getAllByAltText, getByDisplayValue, getByText } from '@testing-library/react';


// Código para resolver o conflito do useLocation (mude o location para o url do seu componente)
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      location: "localhost:3000/match"

    })
  }));

afterEach(cleanup)

it('Check if Arrow button was created', () => {
    const app = shallow(<Groups/>)
    expect(app.find('arrow').exists()).toMatchSnapshot()
});

it('Check if Arrow button was created', () => {
    const app = shallow(<Players/>)
    expect(app.find('arrow').exists()).toMatchSnapshot()
});

it('Check if Arrow button was created', () => {
    const app = shallow(<LiveFixtures/>)
    expect(app.find('arrow').exists()).toMatchSnapshot()
});


// describe('Arrow Button', () => {
    
//     const initialProps = {
//       id: '1',
//       awayTeam: 'Chealse',
//       homeTeam: 'Juventus',
//       score: '3-1',
//       date: '25-11-2020',
//       awayId:'2',
//       homeId:'3',
//       idUser:'4'
//     };
//     const container = shallow(<Match {...initialProps} />);
  
//     it('Check if Facebook share button was created', () => {
//       expect(container.find(FacebookShareButton).exists()).toBeDefined()
//     });
  
//     it('Check if Twitter share button was created', () => {
//         expect(container.find(TwitterShareButton).exists()).toBeDefined()
//       });
//     it('Check if Whatsapp share button was created', () => {
//     expect(container.find(WhatsappShareButton).exists()).toBeDefined()
//     });
//     it('Check if E-mail share button was created', () => {
//       expect(container.find(EmailShareButton).exists()).toBeDefined()
//     });
//     it('Check if Linkedin share button was created', () => {
//       expect(container.find(LinkedinShareButton).exists()).toBeDefined()
//     });

    
//   }); 
