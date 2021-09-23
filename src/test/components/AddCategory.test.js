import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('Debe mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe de cambiar la caja de texto ', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } })
        // expect( wrapper ).toMatchSnapshot();

    })

    test('No debe de postear la información on submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto ', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } })
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).toHaveBeenCalled();
        expect( input.prop('value') ).toBe('')
    })
    
    
})
