import React from 'react';
import Tooltip from '../Tooltip';
import { render, screen } from '@testing-library/react';

describe('Icons', () => {

  let src = 'htts//www.loquesea.com/img';
  let alt = 'All';
  let text = 'Prueba';

  let component;
  let img;
  let div;
  
  beforeEach(() => {
    component = render(
      <Tooltip 
        src={src} 
        alt={alt}
        text={text}
      />
    );
    img = component.container.querySelector("[data-testid='input']");
    div = component.container.querySelector("[data-testid='icons-div']");
  });
  
  test('should render component and visible', () => {
    expect(component.container).toBeDefined();
    expect(component.container).toBeVisible();
  });
  test('Find Prueba', () => {
    const expectedDescription = screen.getByText('Prueba')
    expect(expectedDescription).toBeInTheDocument()
  });
  test('Img defined', () => {
    expect(img).toBeDefined();
  });
  test('should render <div> with class tooltiptext', () => {
    expect(div).toHaveClass('tooltiptext');
  });
  test('Show that <p> has id', () => {
    expect(div.firstChild.getAttribute('id')).toEqual("product");;
  });
});