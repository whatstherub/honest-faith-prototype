class TweaksService {
  constructor($rootScope) {
    this.$rootScope = $rootScope;

    this.tweaks = [];
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
      updateEvent: data.event
    });
  }
}

export default TweaksService;
