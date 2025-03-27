/**
 * Education Module
 * 
 * This module provides educational functionality.
 * Currently contains a simple greeting function.
 */

class Education {
  /**
   * Display a greeting message
   * @param {string} [name='World'] - The name to greet
   * @returns {void}
   */
  static greet(name = 'World') {
    console.log(`Hello, ${name}!`);
  }
}

// Initialize and greet
Education.greet();