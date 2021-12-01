import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../08-useReducer/components/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoList />', () => {
    
    const handleDelete = jest.fn();
    const handleToogle = jest.fn();


    const wrapper = shallow( 
        <TodoList 
            todos ={ demoTodos }
            handleDelete = { handleDelete }
            handleToogle = { handleToogle }
        />)


    test('debe de mostrarse correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de tener dos <TodoListItem />', () => {
       
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
        
        //console.log(wrapper.find('TodoListItem').at(0).props() );
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any( Function ) );

    });
    
});
