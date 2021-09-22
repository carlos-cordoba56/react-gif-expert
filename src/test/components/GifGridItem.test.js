import React from 'react'
import GifGridItem from '../../components/GifGridItem'
import { shallow } from 'enzyme'

describe('Prueba en <GifGridItem />', () => {

    const title = 'Un titulo'
    const url = 'http://localhost/algo.jpg'
    const wrapper = shallow( <GifGridItem title={title} url={url} /> )

    test('Debe de mostrar el componente correctamente', () => {
        
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe( 'title' )
    })

    test('Debe coincidir el url y title de la imagen', () => {
        const img = wrapper.find('img');
        // console.log( img.prop('src') )
        expect( img.prop('src') ).toBe(url)
        expect( img.prop('alt') ).toBe(title)
    })

    test('Debe coincidir la clase', () => {
        const div = wrapper.find('div');

        expect(div.prop('className')).toBe('card')
    })
    
    
    
    
})
