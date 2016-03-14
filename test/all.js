import chai from 'chai';
import {decode} from 'project/katapayadi'

chai.should();

describe('katapayadi', () => {
  it('should decode malayalam properly', () => {
    decode('ശശി').should.equal('55');
    decode('ചണ്ഡാംശുചന്ദ്രാധമകുംഭിപാലൈര്‍').should.equal('31415926536');
    decode('കാക്ക').should.equal('11');
    decode('ആയുരാരോഗ്യസൌഖ്യം').should.equal('1712210');
  });
  it('should decode hindi properly', () => {
    // decode(` गोपीभाग्यमधुव्रात-श्रुग्ङिशोदधिसन्धिग ॥
 // खलजीवितखाताव गलहालारसंधर ॥`).should.equal('31415926535897932384626433832792');
    decode('आयुरारोग्यसौख्यम्').should.equal('1712210');
  });
  it('should decode kannada properly', () => {
    decode(`ಗೋಪೀಭಾಗ್ಯಮಧುವ್ರಾತ-ಶ್ರುಂಗಿಶೋದಧಿಸಂಧಿಗ ||
 ಖಲಜೀವಿತಖಾತಾವ ಗಲಹಾಲಾರಸಂಧರ ||`).should.equal('31415926535897932384626433832792');
  });
  it('should decode telugu properly', () => {
    decode(`గోపీభాగ్యమధువ్రాత-శృంగిశోదధిసంధిగ |
 ఖలజీవితఖాతావ గలహాలారసంధర ||`).should.equal('31415926535897932384626433832792');
  });
});
