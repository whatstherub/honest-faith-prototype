function *r(next) {
  var products = [
    { id: 1  , sku: 'DIAPERS'       , name: 'Diapers' },
    { id: 332, sku: 'LOTION-AP'     , name: 'Lotion - Apricot' },
    { id: 288, sku: 'EYE-CREAM'     , name: 'Eye Cream' },
    { id: 328, sku: 'CONDITIONER-AP', name: 'Conditioner - Apricot' },
    { id: 203, sku: 'DHA'           , name: 'Baby DHA' },
    { id: 246, sku: 'TOOTHBRUSH'    , name: 'Adult Toothbrush' },
    { id: 290, sku: 'REFRESH'       , name: 'Refresh Clean Gel' },
    { id: 334, sku: 'BUBBLE-LV'     , name: 'Bubble Bath - Lavender' },
    { id: 285, sku: 'KONJAC'        , name: 'Konjac Sponge' }
  ];

  this.body = products;

  yield next;
};

module.exports = r;
