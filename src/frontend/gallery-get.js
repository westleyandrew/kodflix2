import matrix from '../images/matrix.jpg';
import big from '../images/big.jpg';
import captain from '../images/captain.jpg';
import deli from '../images/deli.jpg';
import guardians from '../images/guardians.jpg';
import res from '../images/res.jpg';

export default function getGallery() {
    return [
      { id: 'lebowski', name: 'The Big Lebowski', img: big, synopsis: 'Jeff `The Dude\' Leboswki is mistaken for Jeffrey Lebowski, who is The Big Lebowski. Which explains why he\'s roughed up and has his precious rug peed on. In search of recompense, The Dude tracks down his namesake, who offers him a job. His wife has been kidnapped and he needs a reliable bagman. Aided and hindered by his pals Walter Sobchak, a Vietnam vet, and Donny, master of stupidity.'},
      { id: 'capt', name: 'Captain America', img: captain, synopsis: 'It is 1941 and the world is in the throes of war. Steve Rogers (Chris Evans) wants to do his part and join America\'s armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes (Sebastian Stan) and Peggy Carter (Hayley Atwell), Captain America leads the fight against the Nazi-backed HYDRA organization.'},
      { id: 'deli', name: 'Delicatessen', img: deli, synopsis:'Clapet (Jean-Claude Dreyfus) is a butcher who owns a run-down apartment building in post-apocalyptic France. The building is in constant need of a handyman, because Clapet routinely butchers them and sells them as food. The latest in the long ling of disposable workers is Louison (Dominique Pinon), a former circus clown desperate for work and lodging. But this time Clapet\'s plan hits a snag when his young daughter (Marie-Laure Dougnac) falls head over heels for the lovable Louison.'},
      { id: 'guardians', name: 'Guardians of the Galaxy', img: guardians, synopsis:'Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb\'s true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.'},
      { id: 'matrix', name: 'The Matrix', img: matrix, synopsis:'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.'},
      { id: 'reservoir', name: 'Reservoir Dogs', img: res, synopsis:'Six criminals with pseudonyms, and each strangers to one another, are hired to carry out a robbery. The heist is ambushed by police and the gang are forced to shoot their way out. At their warehouse rendezvous, the survivors, realising that they were set up, try to find the traitor in their midst.'}
    ];
  }

  