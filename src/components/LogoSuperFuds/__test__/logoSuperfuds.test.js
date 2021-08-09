import React from 'react';
import LogoSuperFuds from '../index';
import { render } from '@testing-library/react';

describe('Logo', () => {

  let superfuds = 'htts//www.loquesea.com/img';
  let altSuperfuds = 'All';

  let component;
  let img;
  
  beforeEach(() => {
    component = render(
      <LogoSuperFuds 
        src={superfuds}
        alt={altSuperfuds}
      />
    );

    img = component.container.querySelector("[data-testid='LogoData']");
  });
  
  test('should render component and visible', () => {
    expect(component.container).toBeDefined();
    expect(component.container).toBeVisible();
  });
  test('Img attribute src', () => {
    expect(
      img.getAttribute("src")
    ).toBeDefined();
  });
  test('Img attribute alt', () => {
    expect(
      img.getAttribute("alt")
    ).toBeDefined();
  });
});