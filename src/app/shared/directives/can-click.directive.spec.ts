/* eslint-disable @typescript-eslint/no-explicit-any */
import { CanClickDirective } from './can-click.directive';

describe('CanClickDirective', () => {
  it('should create an instance', () => {
    const directive = new CanClickDirective({} as any, {} as any);
    expect(directive).toBeTruthy();
  });
});
