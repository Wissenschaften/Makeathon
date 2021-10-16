let FEIntegrationLayer: any = {};
declare const window: any;

export const feInit = () => {

    FEIntegrationLayer = {
        Customer: null,
    };

    const updatedObject = { ...window.FEIntegrationLayer, ...FEIntegrationLayer };
    window.FEIntegrationLayer = updatedObject;
}

export const feCategory = (categories: any = {}) => {

    FEIntegrationLayer.Category = {
        CategoryId: categories.CategoryId,
        PageTitle: categories.PageTitle,
        PageType: categories.PageType,
        PageURL: categories.PageURL,
        ProductIdList: categories.ProductList.landingWards.data.slice(0, 3).map((landingWard: any) => {
            return {
                id: landingWard.variantId
            }
        }),
        ProductDataLayer: categories.ProductList.landingWards.data.map((landingWard: any) => {
            return {
                ID: landingWard.variantId,
                Name: landingWard.landingWardName,
                Description: landingWard.description,
                Category: landingWard.categories.map((c: any) => c.name),
                Brand: "Feward",
                URL: `https://www.feward.com/${landingWard.slug}`,
                ImageUrls: landingWard.pictures.map((p: any) => p.url),
            }
        })
    };

    const updatedObject = { ...window.FEIntegrationLayer, ...FEIntegrationLayer };
    window.FEIntegrationLayer = updatedObject;
}