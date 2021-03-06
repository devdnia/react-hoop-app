import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../04-useRef/RealExampleRef';


describe('Pruebas en <RealExampleRef />', () => {

    const wrapper = shallow( <RealExampleRef /> );

    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'MultipleCustomHooks').exists() ).toBe( false );

    });

    test('debe de mostrar el compomente <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect( wrapper.find( 'MultipleCustomHooks').exists() ).toBe( true );
        
    });
    
    
})
