import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"


it("Should Render the main screen with only Chelsea games", () => {
    const props = {
        loading: false,
    }


    const app = mount(<App {...props} />)

    expect(toJson(app)).toMatchSnapshot()
})