import { render, waitFor, renderRouter, screen } from 'expo-router/testing-library';
import HomeScreen from './app/(tabs)/index';
it('renders homes screen when tab is clicked', async () => {
    render(<HomeScreen />);
    const tab = screen.getByRole('tab', { name: 'Home' });
    fireEvent.click(tab);
    await waitFor(() => expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Home'));
})