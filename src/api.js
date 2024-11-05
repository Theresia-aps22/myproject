// Configuration de base pour l'API
const apiKey = '3bafaa6b'; // Utiliser le Client ID ici
const baseUrl = 'https://api.jamendo.com/v3.0/';

// Fonction pour rechercher des morceaux
async function searchTracks(query) {
  try {
    const response = await fetch(
      `${baseUrl}tracks?client_id=${apiKey}&format=json&search=${encodeURIComponent(query)}&limit=5`
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

// Appel de la fonction avec une recherche de mots-clés
searchTracks('jazz');
