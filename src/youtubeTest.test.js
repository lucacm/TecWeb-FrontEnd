import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import { shallow ,mount } from 'enzyme';
import Match from "./screens/match";
import toJson from "enzyme-to-json"
import ReactTestUtils from 'react-dom/test-utils';
import Fixtures from './screens/fixtures';
import App from './App'


afterEach(cleanup)

jest.mock("react-router-dom", () => ({
   ...jest.requireActual("react-router-dom"),
   useLocation: () => ({
     location: "localhost:3000/match"

   })
 }));
 describe('youtube_button', ()=>{

    it('Should test if youtube link is correct', ()=> {
      const props = {
         location: {
           state: {
             id: '1',
             awayTeam: 'Barcelona',
             homeTeam: 'Ferencvaros',
             score: '5-1',
             date: '20-10-2020',
             awayId:'21',
             homeId:'1219',
             idUser:'4'
           }
         }
       }
      const App = mount(<Match {...props} />);
      
      expect(App.findWhere(n => n.type() === 'href' && n.contains('https://www.youtube.com/results?search_query=Barcelona+vs+Ferencvaros+2020'))).toBeDefined()
   });

 })

  