// Curated Unsplash photographs chosen to match the restaurant's content.
// The query parameters keep crops and delivery sizes consistent across the site.
function photo(id: string, width = 1600, height = 1100) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=85`;
}

export const restaurantImages = {
  veranda: photo("photo-1552566626-52f8b828add9"),
  salleTables: photo("photo-1517248135467-4c7edcad34c4"),
  enseigne: photo("photo-1515003197210-e0cd71810b5f", 900, 900),
  buffetSalades: photo("photo-1512621776951-a57141f2eefd"),
  platRizBlanc: photo("photo-1547592180-85f173990554"),
  platTassot: photo("photo-1544025162-d76694265947"),
  bar: photo("photo-1511081692775-05d0f180a065"),
  platPoissonHaricots: photo("photo-1559339352-11d035aa65de"),
  gateau: photo("photo-1551024506-0bccd828d307"),
  exterieur: photo("photo-1514933651103-005eec06c04b"),
  platPouletGrille: photo("photo-1532550907401-a500c9a57435"),
  platAvocat: photo("photo-1540420773420-3366772f4999"),
  platFiletCreme: photo("photo-1519708227418-c8fd9a32b7a2"),
  platPoissonFrit: photo("photo-1516685018646-549198525c1b"),
  barJaune: photo("photo-1572116469696-31de0f17cc34"),
  salleBrique: photo("photo-1555396273-367ea4eb4db5"),
  verandaBrique: photo("photo-1521017432531-fbd92d768814"),
  vin: photo("photo-1510812431401-41d2bd2722f3"),
};