import { render } from '@testing-library/react';

import ReactSharedSiteShell from './SiteShell';

describe('ReactSharedSiteShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSharedSiteShell />);
    expect(baseElement).toBeTruthy();
  });
});
