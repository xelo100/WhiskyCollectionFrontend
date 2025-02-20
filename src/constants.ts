export const API_URL = "https://desktop-glhislj:8443";
export const API_BOTTLES = API_URL + "/bottle";
export const API_SET_STATUS = (whiskybaseId: string) => API_URL + `/bottle/${whiskybaseId}/status`;
