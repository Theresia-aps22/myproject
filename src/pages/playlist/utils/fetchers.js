const baseUrl = 'https://api.jamendo.com/v3.0/';
// Clé API de Jamendo
const apiKey = '08f37671'; // Remplacez par votre clé API valide

// Fonction de base pour récupérer les données avec gestion des erreurs
async function fetchData(endpoint) {
    const response = await fetch(`${baseUrl}${endpoint}&client_id=${apiKey}`);

    if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data.results || []; // Retourne le tableau results si disponible
}

// Fonctions spécifiques pour récupérer des données API

// Tracks
export async function fetchTrack(id) {
    const endpoint = `tracks/${id}`;
    return await fetchData(endpoint);
}

export async function fetchTopTracks(limit = 10) {
    const endpoint = `tracks?limit=${limit}`;
    return await fetchData(endpoint);
}

// Artistes
export async function fetchTopArtists(limit = 100) {
    const endpoint = `artists?limit=${limit}`;
    return await fetchData(endpoint);
}

export async function fetchArtist(id) {
    const endpoint = `artists/${id}`;
    return await fetchData(endpoint);
}

export async function fetchArtistTopTracks(id) {
    const endpoint = `artists/${id}/tracks`; // Change ceci en fonction de l'API réelle
    const data = await fetchData(endpoint); // Supposons que fetchData est ta fonction pour appeler l'API
    console.log(`Chansons de l'artiste ${id}:`, data);  // Vérifie les chansons renvoyées
    return data.results || [];  // Retourne un tableau des chansons, ou un tableau vide s'il n'y en a pas
}


// Playlists
export async function fetchTopPlaylists() {
    const endpoint = 'playlists';
    const playlists = await fetchData(endpoint);
    console.log("Données de l'API des playlists:", playlists);
    return playlists;
}

export async function fetchPlaylist(id) {
    const endpoint = `playlists/${id}`;
    return await fetchData(endpoint);
}

// Albums
export async function fetchArtistAlbums(id, limit = 9999) {
    const endpoint = `artists/${id}/albums?limit=${limit}`;
    return await fetchData(endpoint);
}

export async function fetchAlbum(id) {
    const endpoint = `albums/${id}`;
    return await fetchData(endpoint);
}

// Radios
export async function fetchTopRadio() {
    const endpoint = 'radios';
    return await fetchData(endpoint);
}

export async function fetchRadio(id) {
    const radioPromise = fetchData(`radios/${id}`);
    const trackListPromise = fetchData(`radios/${id}/tracks`);
    const [radio, tracks] = await Promise.all([radioPromise, trackListPromise]);

    return {
        ...radio,
        tracks: tracks.data
    };
}

// Recherche
export async function fetchSearchData(query, limit = 3) {
    const categories = ['track', 'album', 'artist'];
    const searchPromises = categories.map(category => 
        fetchData(`search/${category}?q=${query}&limit=${limit}`)
    );

    const [tracks, albums, artists] = await Promise.all(searchPromises);
    return { tracks, albums, artists };
}
