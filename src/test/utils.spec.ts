import sinon from 'sinon';
import { getDisplayDateTime, getPeriod, getPalette } from '../lib/utils';

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
      const expected = { date: 'Thu Nov 19', time: '23:00', period: 'night' };
      expect(actual).toEqual(expected);
    });

    it('should return Thu Nov 19 01:00', () => {
      now = sinon.useFakeTimers({
        now: new Date(2020, 10, 19, 1, 0),
      });
      const actual = getDisplayDateTime();
      const expected = { date: 'Thu Nov 19', time: '01:00', period: 'night' };
      expect(actual).toEqual(expected);
    });

    it('should return Thu Nov 19 23:23', () => {
      now = sinon.useFakeTimers({
        now: new Date(2020, 10, 19, 23, 23),
      });
      const actual = getDisplayDateTime();
      const expected = { date: 'Thu Nov 19', time: '23:23', period: 'night' };
      expect(actual).toEqual(expected);
    });
  });


  describe('testing getPeriod', () => {
    it('should return morning - 05:00 AM', () => {
      const actual = getPeriod(new Date(2020, 10, 19, 5, 0));
      const expected = 'morning';
      expect(actual).toEqual(expected);
    });

    it('should return morning - 11:59 AM', () => {
      const actual = getPeriod(new Date(2020, 10, 19, 11, 59));
      const expected = 'morning';
      expect(actual).toEqual(expected);
    });

    it('should return afternoon - 12:00 PM', () => {
      const actual = getPeriod(new Date(2020, 10, 19, 12, 0));
      const expected = 'afternoon';
      expect(actual).toEqual(expected);
    });

    it('should return afternoon - 04:59 PM', () => {
      const actual = getPeriod(new Date(2020, 10, 19, 16, 59));
      const expected = 'afternoon';
      expect(actual).toEqual(expected);
    });

    it('should return night - 05:00 PM', () => {
      const actual = getPeriod(new Date(2020, 10, 19, 17, 0));
      const expected = 'night';
      expect(actual).toEqual(expected);
    });

    it('should return night - 04:59 AM', () => {
      const actual = getPeriod(new Date(2020, 10, 19, 4, 59));
      const expected = 'night';
      expect(actual).toEqual(expected);
    });
  });

  describe('testing getPalette', () => {
    it('should return morning color code - #282e54', () => {
      const actual = getPalette('morning');
      const expected = '#282e54';
      expect(actual).toEqual(expected);
    });

    it('should return afternoon color code - #000000', () => {
      const actual = getPalette('afternoon');
      const expected = '#000000';
      expect(actual).toEqual(expected);
    });

    it('should return morning color code - #ffdd91', () => {
      const actual = getPalette('night');
      const expected = '#ffdd91';
      expect(actual).toEqual(expected);
    });
  });
});