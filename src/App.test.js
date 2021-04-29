import { act, render, screen } from '@testing-library/react';
import App from './App';
import * as CodeOutput from './CodeOutput';

describe('the app', () => {
  it('renders the app', () => {
    actOnComponent();
    const app = screen.getByTestId("app");
    expect(app).toBeDefined();
  })

  it('contains a header', () => {
    actOnComponent();
    const header = screen.getByTestId("header");
    expect(header).toHaveTextContent("Alt Text");
  })



  it('shows a URL method', () => {
    actOnComponent();
    const urlMethod = screen.getByTestId("url-method")
    expect(urlMethod).toBeDefined();
  })

  const actOnComponent = () => {
    act(() => {
      jest.spyOn(CodeOutput, "default").mockImplementation(props => props?.children || null);
      render(<App />);
    })
  }

});

