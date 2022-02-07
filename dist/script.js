const calculateAverageRating = monTableau => {
  if(monTableau.length === 0){
    return 0;
  }
  let somme = 0;
  let nombreValeurs = monTableau.length;
  for (let elementDeTableau of monTableau) {
    somme += elementDeTableau;
  }
  const moyenne = somme/nombreValeurs;
  return moyenne;
}

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' stars';
  document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' stars';
  document.querySelector('#clara-score').innerText = `${calculateAverageRating([]) === 0 ? 'No ratings' : calculateAverageRating([]) + ' stars'}`
}