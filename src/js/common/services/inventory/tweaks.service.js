class TweaksService {
  constructor($rootScope) {
    this.$rootScope = $rootScope;

    this.tweaks = [{
      product: { id: 332 },
      type: 'demand',
      channel: 'ecom',
      customer: 'shop',
      source: 'assumption',
      quantity: 200,
      date: '11/02/2015'
    },{
      product: { id: 332 },
      type: 'demand',
      channel: 'ecom',
      customer: 'shop',
      source: 'assumption',
      quantity: 500,
      date: '11/08/2015'
    }];
  }

  addTweak( tweakEvent ) {
    this.tweaks.push( tweakEvent );

    this.broadcastUpdate({ type: 'add', event: tweakEvent});
  }

  clearTweaks() {
    this.tweaks.length = 0;
  }

  tweaksForProduct(product) {
    return this.tweaks.filter( (t) => t.product.id == product.id );
  }

  broadcastUpdate(data) {
    this.$rootScope.$broadcast('inventory-tweaks-updated', {
      updateType: data.type,
      updateEvent: data.event,
      allEvents: this.tweaksForProduct(data.event.product)
    });
  }
}

export default TweaksService;
