import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageToggle from './LanguageToggle';

describe('LanguageToggle', () => {
    beforeEach(() => {
        render(<LanguageToggle />);
    });

    test('renders component with English text by default', () => {
        expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
    });

    test('renders component with Arabic text after button click', () => {
        const toggleButton = screen.getByText(/Switch to Arabic/i);
        fireEvent.click(toggleButton);
        expect(screen.getByText(/مرحبًا بالعالم/i)).toBeInTheDocument();
    });
});