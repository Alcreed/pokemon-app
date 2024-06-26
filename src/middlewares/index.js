export const logger = (store) => (next) => (action) => {
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ NAME: 'Totodile' }, ...actionInfo.action.payload];
  const updatedActionInfo = { 
    ...actionInfo, 
    action: {...actionInfo.action, payload: featured} 
  };
  next(updatedActionInfo);
}