import * as C from './constants'

import Util from './Util';

describe('util helper functions', () => {
    let board:string[][]
    beforeEach(() => {
        board = []
        for(let colIx = 0; colIx < C.BOARD_NUM_COLS; colIx++) {
            const column = []
            for(let rowIx = 0; rowIx < C.BOARD_NUM_ROWS; rowIx++) {
                column.push('')
            }
            board.push(column)
        }
        Util.dumpBoard(board, C.BOARD_NUM_ROWS, C.BOARD_NUM_COLS)
    })

    it('testing column checkForWinner', () => {
        board[1] = ['X', 'X', 'X', 'X', '', '']
        board[2] = ['O', 'X', 'O', 'X', '', '']
        board[3] = ['O', 'O', 'X', 'O', '', '']
        board[4] = ['O', 'X', 'O', 'X', '', '']
        console.log('testing checkForWinner...')
        expect(Util.checkForWinner(board)).toBe('X')
    })

    it('testing row checkForWinner', () => {
        board[0] = ['X', 'O', '', '', '', '']
        board[1] = ['X', '', '', '', '', '']
        board[2] = ['X', 'O', '', '', '', '']
        board[3] = ['X', 'O', '', '', '', '']
        expect(Util.checkForWinner(board)).toBe('X')
    })

    it('testing diagonal checkForWinner', () => {
        board[0] = ['X', 'O', 'X', '', '', '']
        board[1] = ['O', 'X', 'O', '', '', '']
        board[2] = ['X', 'O', 'X', '', '', '']
        board[3] = ['O', 'X', 'O', '', '', '']
        board[4] = ['X', 'O', 'X', '', '', '']
        board[5] = ['O', 'x', 'O', '', '', '']
        board[6] = ['X', 'O', 'X', '', '', '']
        expect(Util.checkForWinner(board)).toBe('')
    })

    it('testing diagonal checkForWinner', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['X', '', '', '', '', '']
        board[2] = ['O', 'X', '', '', '', '']
        board[3] = ['O', 'X', 'X', '', '', '']
        board[4] = ['O', 'X', 'O', 'X', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['O', '', '', '', '', '']
        expect(Util.checkForWinner(board)).toBe('X')
    })

    it('testing diagonal checkForWinner', () => {
        board[0] = ['O', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['O', 'X', 'O', 'X', '', '']
        board[3] = ['X', 'O', 'X', '', '', '']
        board[4] = ['O', 'X', '', '', '', '']
        board[5] = ['X', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        expect(Util.checkForWinner(board)).toBe('X')
    })

    it('testing row checkForWinner', () => {
        board[0] = ['X', '', '', '', '', '']
        board[1] = ['X', 'X', '', '', '', '']
        board[2] = ['X', '', '', '', '', '']
        board[3] = ['O', '', '', '', '', '']
        board[4] = ['O', '', '', '', '', '']
        board[5] = ['O', '', '', '', '', '']
        board[6] = ['O', '', '', '', '', '']
        expect(Util.checkForWinner(board)).toBe('O')
    })
})
