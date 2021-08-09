import React from 'react';
import User from '../index';
import avatar from '../../../assets/img/avatar.jpg';
import { render, screen } from '@testing-library/react';

describe('Layout variable', () => {

  let name = 'Alberth';
  let text = 'prueba';
  let altAvatar = 'alt';
  let type = 'type';

  let component;
  
  beforeEach(() => {
    component = render(
      <User 
        name={name}
        text={text}
        avatar={avatar}
        altAvatar={altAvatar}
        type={type}
      />
    );
  });
  
  test('should render component and visible', () => {
    expect(component.container).toBeDefined();
    expect(component.container).toBeVisible();
  });
  test('Verify that the text is displayed in the document', () => {
    const name = 'Alberth';
    const expectedTitle = screen.getByText(name);
    expect(expectedTitle).toBeInTheDocument();
  });
});