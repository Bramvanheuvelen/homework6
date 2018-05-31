export const BASE_CHOICE = 'BASE_CHOICE'

export const baseChoice = () => {
    const [board, locked] = fillBoard(rows)
    return {
      type: 'BASE_CHOICE',
      payload: {
        
      }
    }