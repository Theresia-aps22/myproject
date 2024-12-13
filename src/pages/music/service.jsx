// services/musicService.js
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://api.jamendo.com/v3.0/';
const apiKey = '08f37671'; // Votre clé API (client_id)

// Fonction pour récupérer les morceaux aléatoires
export const fetchRandomTracks = async () => {
  try {
    const response = await fetch(
      `${proxyUrl}${baseUrl}tracks?client_id=${apiKey}&format=json&limit=50`
    );

    if (!response.ok) {
      throw new Error('Erreur dans la requête API');
    }

    const data = await response.json();

    // Vérifier si des résultats sont retournés
    if (data.results && data.results.length > 0) {
      // Mélange les morceaux pour une sélection aléatoire
      const shuffledTracks = data.results.sort(() => 0.5 - Math.random());
      const selectedTracks = shuffledTracks.slice(0, 20); // Prendre les 20 premiers morceaux mélangés
      return selectedTracks;
    } else {
      throw new Error('Aucun morceau trouvé');
    }
  } catch (error) {
    throw new Error('Erreur: ' + error.message);
  }
};
