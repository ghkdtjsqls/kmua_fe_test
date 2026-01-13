// category.js
export const CATEGORIES = [
  {
    id: 'skincare',
    name: 'SKINCARE',
    link: '/collections', // 중분류 클릭 시 이동할 경로
    children: [
      { id: 'limpieza-facial', name: 'LIMPIEZA FACIAL', link: '/skincare/limpieza-facial' },
      { id: 'crema', name: 'CREMA', link: '/skincare/crema' },
      { id: 'toner', name: 'TONER', link: '/skincare/toner' },
      { id: 'mascarilla', name: 'MASCARILLA', link: '/skincare/mascarilla' },
      { id: 'serum', name: 'SERUM', link: '/skincare/serum' },
      { id: 'ampoule', name: 'AMPOULE', link: '/skincare/ampoule' },
      { id: 'protector', name: 'PROTETOR SOLAR', link: '/skincare/protetor-solar' },
    ],
  },
];