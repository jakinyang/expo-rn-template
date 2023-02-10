import React from "react";
import { render, screen } from '@testing-library/react-native';
import { Smoke } from '../SmokeComponent';

describe('Smoke', () => {
  it('should render', () => {
    render(<Smoke />);
    expect(screen.getByText("I only smoke in Jest")).toBeVisible();
  });
})