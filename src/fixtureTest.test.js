import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import TestRenderer from 'react-test-renderer';
import { shallow ,mount } from 'enzyme';
import toJson from "enzyme-to-json"
import ReactTestUtils from 'react-dom/test-utils';
import Fixtures from './screens/fixtures';
import App from './App'


afterEach(cleanup)


it('Should filter the main screen and display with only Chelsea games', function () {
   const app = mount(<Fixtures/>)

   expect(app.find('input').simulate('change', {target: {value: "chelsea"}})).toMatchSnapshot()
  });
  
  it('Should filter the main screen and display games won by home team', function () {
   const app = mount(<Fixtures/>)

   expect(app.find('button.home-won-button').simulate('click')).toMatchSnapshot()
  });

  it('Should filter the main screen and display tied games', function () {
   const app = mount(<Fixtures/>)

   expect(app.find('button.tie-button').simulate('click')).toMatchSnapshot()
  });

  it('Should filter the main screen and display games won by away team', function () {
   const app = mount(<Fixtures/>)

   expect(app.find('button.away-won-button').simulate('click')).toMatchSnapshot()
  });