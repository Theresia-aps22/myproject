const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://api.jamendo.com/v3.0/';

// Configuration de base pour l'API
const apiKey = '08f37671'; // Votre clé API (client_id)

// Fonction pour récupérer des playlists
async function fetchPlaylists() {
  try {
    const response = await fetch(
      `${proxyUrl}${baseUrl}chart/0/playlists?client_id=${apiKey}&format=json`
    );

    if (!response.ok) {
      throw new Error('Erreur dans la requête API');
    }

    const data = await response.json();
    console.log("Données des playlists:", data); // Afficher les données

    return data; // Renvoie les données de playlists
  } catch (error) {
    console.error('Erreur:', error.message);
  }
}

// Fonction pour rechercher des morceaux
async function searchTracks(query) {
  try {
    const response = await fetch(
      `${proxyUrl}${baseUrl}tracks?client_id=${apiKey}&format=json&search=${encodeURIComponent(query)}&limit=5`
    );

    if (!response.ok) {
      throw new Error('Erreur dans la requête API');
    }

    const data = await response.json();

    // Vérifier que des résultats sont retournés
    if (data.results && data.results.length > 0) {
      // Affiche les informations de chaque morceau
      data.results.forEach(track => {
        console.log(`Titre: ${track.name}`);
        console.log(`Artiste: ${track.artist_name}`);
        console.log(`URL de streaming: ${track.audio}`);
        console.log('---');
      });
    } else {
      console.log('Aucun résultat trouvé.');
    }
  } catch (error) {
    console.error('Erreur:', error.message);
  }
}

// Appel des fonctions
fetchPlaylists();
searchTracks('jazz');
