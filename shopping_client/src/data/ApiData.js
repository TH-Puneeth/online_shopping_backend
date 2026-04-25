
class CategoryData{
    constructor(categoryData){
        this._categoryData = categoryData;
    }
    set (categoryData){
        this._categoryData = categoryData;
    }
    get (){
        return this._categoryData;
    }
}
const categoryData = new CategoryData();
categoryData.set(null);

class ProductData{
    constructor(productData){
        this._productData = productData;
    }
    set (productData){
        this._productData = productData;
    }
    get (){
        return this._productData;
    }
}
const productData = new ProductData();
productData.set(null);

export {categoryData, productData};