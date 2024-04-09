'use strict';

import { convert } from './solution1.js';

describe('convert function', () => {
    // Test case for converting 5 minutes to seconds
    it('convert 5 minutes to 300 seconds', () => {
        expect(convert(5)).toBe(300);
    });

     
    // Test case for converting 0 minutes to 0 seconds
     it('convert 0 minutes to 0 seconds', () => {
        expect(convert(0)).toBe(0);
    });

    // Test case for converting negative minutes to 0 seconds (assuming edge case handling)
    it('convert negative minutes to 0 seconds', () => {
        expect(convert(-5)).toBe(0);
    });
 
});
