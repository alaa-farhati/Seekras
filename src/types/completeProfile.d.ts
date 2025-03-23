 interface Hobby {
  id: number;
  name: string;
  image?: string;
}

 interface Interest {
  id: number;
  name: string;
  image?: string;
} interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
  theme: {
    accent: string;
    inputBackground: string;
  };
}