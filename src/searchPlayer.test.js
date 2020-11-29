import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import { shallow ,mount } from 'enzyme';
import toJson from "enzyme-to-json"
import ReactTestUtils from 'react-dom/test-utils';
import Lineup from './screens/lineup';
import App from './App'


afterEach(cleanup)


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
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
 
    })
  }));

  describe('search_player', ()=>{
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

  const App = mount(<Lineup {...props} />);
 
     it('Should render search Home results for Lionel Messi', function () {
        expect(App.find('input').at(0).simulate('change', {target: {value: "Lionel Messi"}})).toMatchSnapshot()

        // Printando no console para certificar de que o teste está sendo feito no input correto (Home).
        console.log(App.find('input').at(0).simulate('change', {target: {value: "Lionel Messi"}}).debug())
    });

    it('Should render search Away results for David Siger', function () {
        expect(App.find('input').at(1).simulate('change', {target: {value: "David Siger"}})).toMatchSnapshot()

        // Printando no console para certificar de que o teste está sendo feito no input correto (Away).
        console.log(App.find('input').at(1).simulate('change', {target: {value: "David Siger"}}).debug())
    });
 
  })
 
  