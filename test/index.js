import React from 'react';
import { node } from 'prop-types';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

const Providers = ({ children }) => (
  <div>{children}</div>
);

Providers.propTypes = {
  children: node.isRequired,
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
