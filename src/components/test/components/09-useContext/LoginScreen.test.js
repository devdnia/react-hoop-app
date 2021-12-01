import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../09-useContext/LoginScreen';
import { UserContext } from '../../../09-useContext/UserContext';
import { act } from '@testing-library/react';

describe('Pruebas en <LoginSreen />', () => {
    
    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser
        }}>
            < LoginScreen /> )
        </UserContext.Provider>
        );


    
    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de ejecutar el setUser con el argumento esperado', () => {
        
       wrapper.find('button').prop('onClick')();

       expect( setUser ).toHaveBeenCalledWith({
        id: 123,
        name: 'Iván'
       });
    });
})

