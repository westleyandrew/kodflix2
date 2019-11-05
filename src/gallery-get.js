import matrix from './images/matrix.jpg';
import big from './images/big.jpg';
import captain from './images/captain.jpg';
import deli from './images/deli.jpg';
import guardians from './images/guardians.jpg';
import res from './images/res.jpg';

export default function getGallery() {
    return [
      { id: 'lebowski', name: 'The Big Lebowski', img: big, synopsis: 'Jeff \`The Dude\' Leboswki is mistaken for Jeffrey Lebowski, who is The Big Lebowski. Which explains why he\'s roughed up and has his precious rug peed on. In search of recompense, The Dude tracks down his namesake, who offers him a job. His wife has been kidnapped and he needs a reliable bagman. Aided and hindered by his pals Walter Sobchak, a Vietnam vet, and Donny, master of stupidity.'},
      { id: 'capt', name: 'Captain America', img: captain},
      { id: 'deli', name: 'Delicatessen', img: deli},
      { id: 'guardians', name: 'Guardians of the Galaxy', img: guardians},
      { id: 'matrix', name: 'The Matrix', img: matrix},
      { id: 'reservoir', name: 'Reservoir Dogs', img: res}
    ];
  }