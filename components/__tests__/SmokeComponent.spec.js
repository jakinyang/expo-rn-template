import React from "react";
import { render, screen } from '@testing-library/react-native';
import { Smoke } from '../SmokeComponent'

describe('Smoke', () => {
  it('should render correctly', () => {
    render(<Smoke />);
    expect(getByText('I only smoke in Jest')).toBeVisible()
  });
})