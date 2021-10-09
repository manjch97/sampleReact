export const updateObject = (oldObject, upatedProperties) => {
    return {
        ...oldObject,
        ...upatedProperties
    }
};