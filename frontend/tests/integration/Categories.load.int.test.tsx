import { render, screen, waitFor } from '@testing-library/react'
import Categories from '../../src/components/Categories'
import { server, apiGet, json } from '../setup'

describe('Categories integration - carga de lista', () => {
  it('renderiza categorias retornadas pela API', async () => {
    server.use(
      apiGet('/categories', (_req) =>
        json({
          data: [
            { 
              id: '1', 
              name: 'Trabalho', 
              description: 'Tarefas relacionadas ao trabalho',
              createdAt: new Date().toISOString()
            },
            { 
              id: '2', 
              name: 'Estudos', 
              description: 'Tarefas de estudo e aprendizado',
              createdAt: new Date().toISOString()
            }
          ]
        })
      )
    )

    render(<Categories />)

    await waitFor(() => {
      expect(screen.getByText('Trabalho')).toBeInTheDocument()
      expect(screen.getByText('Tarefas relacionadas ao trabalho')).toBeInTheDocument()
      expect(screen.getByText('Estudos')).toBeInTheDocument()
      expect(screen.getByText('Tarefas de estudo e aprendizado')).toBeInTheDocument()
    })
  })
})