import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../08-useReducer/components/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {

    const handleDelete = jest.fn()
    const handleToogle = jest.fn()

    const wrapper = shallow( 
        <TodoListItem 
            todo           = { demoTodos[0] }
            index          = { 0 }
            handleDelete   = { handleDelete }
            handleToogle   = { handleToogle}
        />
        );

    test('debe de mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de llamar la función handleDelete ', () => {

        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
        
    });

    test('debe de llamar la función handleToogle ', () => {

        wrapper.find('p').simulate('click');
        expect( handleToogle ).toHaveBeenCalledWith( demoTodos[0].id );


    });

    test('debe de mostrar el texto correctamente ', () => {
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( `${0+1}. ${ demoTodos[0].desc}`);

    });
    
    test('debe de tener la clase Complete si el TODO.done = true ', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow( 
            <TodoListItem 
                todo           = { todo }
                index          = { 0 }
                handleDelete   = { handleDelete }
                handleToogle   = { handleToogle}
            />
            );
        
        // console.log( wrapper.html())
        expect( wrapper.find('p').hasClass('complete') ).toBe( true );



    });
});
