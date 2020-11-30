import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import { shallow ,mount } from 'enzyme';
import toJson from "enzyme-to-json"
import ReactTestUtils from 'react-dom/test-utils';
import Historic from './screens/historic';
import App from './App'


afterEach(cleanup)


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
     state: {
       awayId:'21',
       homeId:'1219'    
     }
 
    })
  }));

  describe('subtitle_WDL', ()=>{
   const props = {
     location: {
       state: {
         awayId:'21',
         homeId:'1219' 
       }
     }
   }

  const App = mount(<Historic {...props} />);
 
     it('Check if subtitle table was created', () => {
        expect(App.find('table')).toMatchSnapshot()
    });
  })
 
  