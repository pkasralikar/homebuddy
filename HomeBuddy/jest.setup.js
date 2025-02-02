// jest.setup.js

// Mocking Font.loadAsync to prevent issues with font loading in Jest
jest.mock('expo-font', () => ({
    loadAsync: jest.fn().mockResolvedValue(true), // Mock successful font loading
  }));
  
  // If you are using react-native-gesture-handler, you should also mock this to avoid related errors:
  jest.mock('react-native-gesture-handler', () => {
    const actual = jest.requireActual('react-native-gesture-handler');
    return {
      ...actual,
      GestureHandlerRootView: jest.fn().mockImplementation(({ children }) => children),
    };
  });
  
  // Mocking react-native-reanimated (if you use it) to avoid issues with animations during tests
  jest.mock('react-native-reanimated', () => {
    const Reanimated = jest.requireActual('react-native-reanimated');
    return {
      ...Reanimated,
      Easing: { in: jest.fn() },
    };
  });
  