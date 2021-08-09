import React from 'react';
import Search from '../index';
import { render } from '@testing-library/react';

describe('Search', () => {

  let type = 'button';
  let placeholder = 'prueba';

  let component;
  let input;
  
  beforeEach(() => {
    component = render(
      <Search 
        type={type}
        placeholder={placeholder}
      />
    );

    input = component.container.querySelector("[data-testid='searchButtona']");
  });
  
  test('should render component and visible', () => {
    expect(component.container).toBeDefined();
    expect(component.container).toBeVisible();
  });
  test('Input attribute type', () => {
    expect(
      input.getAttribute("type")
    ).toBeDefined();
  });
  test('Input attribute placeholder', () => {
    expect(
      input.getAttribute("placeholder")
    ).toBeDefined();
  });
});