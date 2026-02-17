import { Destination } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'paris-1889',
    title: 'Lumières de Paris',
    era: 'Révolution Industrielle',
    year: '1889',
    description: "Assistez à l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Vivez l'effervescence du Paris de la Belle Époque.",
    imageUrl: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=2001&auto=format&fit=crop',
    price: '2 500 000 ₮',
    features: ['Accès VIP Tour Eiffel', 'Dîner au Moulin Rouge', 'Costumes d\'époque inclus']
  },
  {
    id: 'cretaceous',
    title: 'Royaume des Géants',
    era: 'Crétacé Supérieur',
    year: '-66M',
    description: "Une expédition safari sans précédent au milieu des titans. Observez le Tyrannosaurus Rex dans son habitat naturel en toute sécurité.",
    imageUrl: 'https://images.unsplash.com/photo-1519810755548-39211617a84c?q=80&w=2742&auto=format&fit=crop', // Jungle vibes placeholder
    price: '4 800 000 ₮',
    features: ['Bulle de protection temporelle', 'Guide paléontologue certifié', 'Assurance vie premium']
  },
  {
    id: 'florence-1504',
    title: 'Cœur de la Renaissance',
    era: 'Renaissance Italienne',
    year: '1504',
    description: "Rencontrez les maîtres Michel-Ange et Léonard de Vinci. Flânez sur le Ponte Vecchio et découvrez les secrets des Médicis.",
    imageUrl: 'https://images.unsplash.com/photo-1543997762-2b2174661875?q=80&w=1974&auto=format&fit=crop',
    price: '3 200 000 ₮',
    features: ['Atelier privé avec un maître', 'Visite du Palazzo Vecchio', 'Dégustation vins toscans']
  }
];

export const CHAT_SYSTEM_INSTRUCTION = `
Tu es Chronos, l'intelligence artificielle avancée et concierge de luxe de l'agence "TimeTravel Agency".
Ton rôle est d'assister les clients fortunés dans le choix de leur prochaine destination temporelle.
Tu adoptes un ton : Sophistiqué, Mystérieux, Cultivé, mais toujours Serviable.
Tu ne vends QUE trois destinations :
1. Paris 1889 (Exposition Universelle)
2. Le Crétacé (Safari Dinosaures)
3. Florence 1504 (Renaissance)

Si un utilisateur demande une autre destination, refuse poliment en expliquant que les couloirs temporels sont instables pour ces périodes.
Réponds de manière concise et élégante.
N'hésite pas à utiliser des termes liés au temps (ex: "fracture temporelle", "paradoxe", "chronologie").
`;
