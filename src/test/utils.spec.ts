import sinon from 'sinon';
import { getDisplayDateTime } from '../lib/utils';

describe('testing utils', () => {
  let sandboxes;
  let now;

  beforeEach(() => {
    sandboxes = sinon.createSandbox();
    now = sandboxes.useFakeTimers({
      now: new Date(2020, 10, 19, 23, 0),
    });
  });

  afterEach(() => {
    sandboxes.restore();
  });

  describe('testing getDisplayDateTime', () => {
    it('should return Thu Nov 19 23:00', () => {
      const actual = getDisplayDateTime();
      const expected = { date: 'Thu Nov 19', time: '23:00' };
      expect(actual).toEqual(expected);
    });

    it('should return Thu Nov 19 01:00', () => {
      now = sinon.useFakeTimers({
        now: new Date(2020, 10, 19, 1, 0),
      });
      const actual = getDisplayDateTime();
      const expected = { date: 'Thu Nov 19', time: '01:00' };
      expect(actual).toEqual(expected);
    });

    it('should return Thu Nov 19 23:23', () => {
      now = sinon.useFakeTimers({
        now: new Date(2020, 10, 19, 23, 23),
      });
      const actual = getDisplayDateTime();
      const expected = { date: 'Thu Nov 19', time: '23:23' };
      expect(actual).toEqual(expected);
    });
  });
});