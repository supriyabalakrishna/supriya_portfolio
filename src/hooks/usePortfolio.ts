import type { PortfolioData } from '../types/portfolio';
import portfolioData from '../data/portfolio.json';

/**
 * Hook to retrieve the portfolio data conforming to PortfolioData interface.
 * Useful for future data-fetching strategies (like reading from an API)
 * without changing the rest of the application.
 */
export const usePortfolio = (): PortfolioData => {
  return portfolioData as PortfolioData;
};
export default usePortfolio;
