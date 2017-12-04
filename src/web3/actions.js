export const INITIALIZE_WEB3 = 'INITIALIZE_WEB3';
export function initializeWeb3(payload) {
  return {
    type: INITIALIZE_WEB3,
    payload,
  };
}
