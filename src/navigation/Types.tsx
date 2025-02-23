// types.ts or navigation/types.ts
export type RootStackParamList = {
    Auth: undefined; // No params for Auth screen
    Feed: undefined; // No params for Feed screen
    Settings: undefined; // No params for Settings screen
    Profile: { userId: string }; // Profile screen requires a userId param
    Marketplace: undefined; // No params for Marketplace screen
    Chat: { chatId: string }; // Chat screen requires a chatId param
    EventCreation: undefined; // No params for Event Creation screen
    Maps: undefined; // No params for Maps screen
    Payment: undefined; // No params for Payment screen
    NotFound: undefined; // No params for NotFound screen
    // Add any additional screens here
  };
  // navigation/types.ts or App.tsx you don't need to declare it for every new navigation
declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }
  