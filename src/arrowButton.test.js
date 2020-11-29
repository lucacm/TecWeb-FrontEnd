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

