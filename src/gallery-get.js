import matrix from './images/matrix.jpg';
import big from './images/big.jpg';
import captain from './images/captain.jpg';
import deli from './images/deli.jpg';
import guardians from './images/guardians.jpg';
import res from './images/res.jpg';

export default function getGallery() {
    return [
      { id: 'lebowski', name: 'The Big Lebowski', img: big},
      { id: 'capt', name: 'Captain America', img: captain},
      { id: 'deli', name: 'Delicatessen', img: deli},
      { id: 'guardians', name: 'Guardians of the Galaxy', img: guardians},
      { id: 'matrix', name: 'The Matrix', img: matrix},
      { id: 'reservoir', name: 'Reservoir Dogs', img: res}
    ];
  }