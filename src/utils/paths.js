export const getBasePath = () => {
  // Check if we're in development by looking at the URL
  const isDevelopment = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1';
  return isDevelopment ? '' : '/ecosolve-boller';
}; 