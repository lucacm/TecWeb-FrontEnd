import React, { Component } from'react';
import PropTypes from "prop-types";
import Match from "./screens/match";
import { shallow } from 'enzyme';
import {EmailShareButton, FacebookShareButton, TwitterShareButton,WhatsappShareButton} from 'react-share';


// Código para resolver o conflito do useLocation (mude o location para o url do seu componente)
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      location: "localhost:3000/match"

    })
  }));

describe('Share Button', () => {
    
    const initialProps = {
      id: '1',
      awayTeam: 'Chealse',
      homeTeam: 'Juventus',
      score: '3-1',
      date: '25/11/2020',
      awayId:'2',
      homeId:'3',
      idUser:'4'
    };
    const container = shallow(<Match {...initialProps} />);
  
    it('Check if Facebook share button was created', () => {
      expect(container.find(FacebookShareButton).exists())
    });
  
    it('Check if Twitter share button was created', () => {
        expect(container.find(TwitterShareButton).exists())
      });
    it('Check if Whatsapp share button was created', () => {
    expect(container.find(WhatsappShareButton).exists())
    });
    it('Check if E-mail share button was created', () => {
      expect(container.find(EmailShareButton).exists())
    });
  });