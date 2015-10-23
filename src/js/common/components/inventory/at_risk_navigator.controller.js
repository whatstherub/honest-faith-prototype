class AtRiskNavigatorController {
  constructor($scope) {
    this.atRiskProducts = $scope.atRiskProducts = [];
    console.warn('nav scope',$scope);

  }

  addNewProduct() {
    console.warn("nav vm adding new");

    this.atRiskProducts.push({name:"another"});
  }

  updateSelectedProducts(products) {
    console.warn("vm updating products");
    this.atRiskProducts.length = 0;

    _.each(products, (p) => {
      this.atRiskProducts.push(p);
      return true;
    });
  }

  saySomething() {}
}

export default AtRiskNavigatorController;
