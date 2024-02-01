import { render } from '@testing-library/react';

import SiteShell from './SiteShell';

describe('SiteShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiteShell />);
    expect(baseElement).toBeTruthy();
  });
});
