import React, { Component } from'react';
import PropTypes from "prop-types";
import Match from "./screens/match";
import { shallow, mount } from 'enzyme';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App'
import TestRenderer from 'react-test-renderer';



afterEach(cleanup)


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      location: "localhost:3000/match"

    })
  }));

describe('colored Score', ()=>{
  const props = {
    location: {
      state: {
        id: '1',
        awayTeam: 'Barcelona',
        homeTeam: 'Ferencvaros',
        score: '5 - 1',
        date: '20-10-2020',
        awayId:'21',
        homeId:'1219',
        idUser:'4'
      }
    }
  }

 const app = mount(<Match {...props} />);

 
 it('Should check if home score is colored', () => {
      expect(app.find('div.coloredHome').exists()).toMatchSnapshot()
    });
 it('Should check if away score is colored', () => {
      expect(app.find('div.coloredAway').exists()).toMatchSnapshot()
    });

 });
