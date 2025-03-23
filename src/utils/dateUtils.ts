export const formatDate = (timestamp: number, format: 'full' | 'date' | 'month' | 'time' = 'full'): string => {
    const date = new Date(timestamp);
  
    switch (format) {
      case 'full':
        return date.toLocaleString('fr-TN'); // e.g., "22/02/2024 13:43"
      case 'date':
        return date.toLocaleDateString('fr-TN'); // e.g., "22/02/2024"
      case 'month':
        return date.toLocaleString('fr-TN', { month: '2-digit', year: 'numeric' }); // e.g., "02/2024"
      case 'time':
        return date.toLocaleTimeString('fr-TN'); // e.g., "13:43 AM"
      default:
        return date.toLocaleString('fr-TN'); // Default to full timestamp
    }
  };
  
  // Example usage:
  // formatDate(1708560000000, 'full') -> "22/02/2024 13:43"
  // formatDate(1708560000000, 'date') -> "22/02/2024"
  // formatDate(1708560000000, 'month') -> "02/2024"
  // formatDate(1708560000000, 'time') -> "13:43 AM"
  
  
  export const formatTimeAgo = (timestamp?: string): string => {
      if (!timestamp) return '';
  
      const now = new Date();
      const postTime = new Date(timestamp);
      const diffMs = now.getTime() - postTime.getTime();
  
      // Convert to minutes, hours, days
      const diffMins = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
      if (diffMins < 60) {
        return `${diffMins} min ago`;
      } else if (diffHours < 24) {
        return `${diffHours} hours ago`;
      } else {
        return `${diffDays} days ago`;
      }
    };
