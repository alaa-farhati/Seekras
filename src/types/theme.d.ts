 interface Theme {
  name: string;
  primary: string;          // Primary color (White in light mode, Dark in dark mode)
  background: string;       // Background color (Softer than primary)
  accent: string;           // Accent color for highlights
  secondary: string;        // Secondary color
  text: string;             // Text color
  card: string;             // Card background color
  button: string;           // Button background color
  buttonText: string;       // Button text color
  inputBackground: string;  // Input field background
  inputText: string;        // Input field text color
  border: string;           // Border color for inputs, dividers, etc.
}
