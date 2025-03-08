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
  
  
  export const timeAgo = (timestamp: number): string => {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);
  
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
  
    const days = Math.floor(hours / 24);
    if (days === 1) return "Yesterday"; // Added check for yesterday
    return `${days} days ago`;
  };
