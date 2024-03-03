import Post from '..';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe('adicionar comentários no projeto', () => {
    test('inserir dois comentários', async () => {
        render(<Post />);

        const botaoComentar = screen.getByTestId('btn-comentar');
        const inputComentario = screen.getByTestId('input-comentario');

        fireEvent.change(inputComentario, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(botaoComentar);

        await waitFor(() => {
            expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        });

        fireEvent.change(inputComentario, { target: { value: '' } });

        fireEvent.change(inputComentario, { target: { value: 'Segundo comentário' } });
        fireEvent.click(botaoComentar);

        await waitFor(() => {
            expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
        });
    });
});
