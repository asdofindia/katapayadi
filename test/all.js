import chai from 'chai';
import {decode} from 'project/katapayadi'

chai.should();

describe('katapayadi', () => {
    it('should decode properly', () => {
        decode("ശശി").should.equal(11);
        decode("ചണ്ഡാംശുചന്ദ്രാധമകുംഭിപാലൈര്‍").should.equal(31415926536);
    });
});
