//import url from "./URL";

export function flattenProducts(data) {
    return data.map(item => {
        let image = (item.image && item.image.url) || null;
        //let image = `${url}${item.image.url}`;
        return {...item, image};
    });
}

// helper functions
export function featuredProducts(data) {
    return data.filter(item => {
        return item.featured === true;
    });
}

//paginate
export function paginate(products) {
    const itemsPerPage = 4;
    const numberOfPages = Math.ceil(products.length / itemsPerPage);
    
    //const newProducts = Array.from({ length: numberOfPages }, () => {
    //    return products.splice(0, itemsPerPage);
    //});
    const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        return products.slice(start, start + itemsPerPage);
    });

    //our code goes here
    return newProducts;
}