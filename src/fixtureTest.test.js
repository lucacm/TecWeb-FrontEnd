import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
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
  