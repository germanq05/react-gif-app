import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import  {HookApp}  from '../HookApp.js';

describe('Pruebas en <HookApp />', () => {

    test('Debe mostrarse correctamente', () => {
      const wrapper = shallow( <HookApp /> );
      expect( wrapper ).toMatchSnapshot();
    });
    
})