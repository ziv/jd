import { userData } from './user';

describe('userData', () => {
  it('should work', () => {
    expect(userData()).toEqual('user-data');
  });
});
