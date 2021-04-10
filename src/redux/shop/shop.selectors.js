import { createSelector } from 'reselect';

import memoize from 'lodash.memoize';

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize(collectionUrlParam => //Because we pass in a dynamic argument here, this selector is no longer memoized. So, we use the lodash.memoize function to make in memoized.
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    ));