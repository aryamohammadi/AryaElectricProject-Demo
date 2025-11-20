// Sample Utility Functions
// Demonstrates common utility patterns used throughout the project

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names, handling conflicts between Tailwind classes
 * This ensures that the last class wins when there are conflicts
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a phone number for display
 * Example: "1234567890" becomes "(123) 456-7890"
 */
export function formatPhoneNumber(phone) {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Validates email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generates an absolute URL from a relative path
 */
export function absoluteUrl(path, baseUrl = 'https://example.com') {
  return new URL(path, baseUrl).href;
}

/**
 * Debounce function for search inputs or API calls
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

