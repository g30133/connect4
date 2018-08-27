class Util {
    public static dumpBoard(board:string[][], numRows:number, numCols:number) {
        //console.log(`dumpBoard(${board})`)
        let dump:string = ''
        for (let rowIx = 0; rowIx < numRows; rowIx++) {
            for(let colIx = 0; colIx < numCols; colIx++) {
                dump += (board[colIx][rowIx] === '') ? '.' : board[colIx][rowIx]            
                if (colIx === numCols-1) {
                    dump += '\n'
                }
            }
        }
        console.log(dump)
    }

    public static checkForWinner(board:string[][]) {
        console.log('checkForWinner()')
        const columnWinner =  Util.checkColumnsForWinner(board)
        const rowWinner = Util.checkRowsForWinner(board)
        const diagonalWinner = Util.checkDiagonalForWinner(board)
        let winner = ''
        if(columnWinner !== '') {
            winner = columnWinner
        } else if(rowWinner !== '') {
            winner = rowWinner
        } else if(diagonalWinner !== '') {
            winner = diagonalWinner
        }
        return winner
    }

    private static checkColumnsForWinner(board:string[][]) {
        for(const column of board) {
            for(let i = 0; i < column.length-3; i++) {
                if(column[i] === column[i+1] && column[i+1] === column[i+2] && column[i+2] === column[i+3] && column[i] !== '') {
                    console.log('column[i]:' + column[i])
                    return column[i]
                }
            }
        }
        return ''
    }

    private static checkRowsForWinner(board:string[][]) {
        for(let colIx = 0; colIx < board.length-3; colIx++) {
            for(let rowIx = 0; rowIx < board[colIx].length; rowIx++) {
                if(
                    board[colIx][rowIx] === board[colIx+1][rowIx] &&
                    board[colIx+1][rowIx] === board[colIx+2][rowIx] &&
                    board[colIx+2][rowIx] === board[colIx+3][rowIx] &&
                    board[colIx][rowIx] !== '') {
                        return board[colIx][rowIx]
                    }
            }
        }
        return ''
    }

    private static checkDiagonalForWinner(board:string[][]) {
        for(let colIx = 0; colIx < board.length-3; colIx++) {
            for(let rowIx = 0; rowIx < board[colIx].length-3; rowIx++) {
                if(board[colIx][rowIx] === board[colIx+1][rowIx+1] &&
                        board[colIx+1][rowIx+1] === board[colIx+2][rowIx+2] &&
                        board[colIx+2][rowIx+2] === board[colIx+3][rowIx+3] &&
                        board[colIx][rowIx] !== '') {
                    return board[colIx][rowIx]
                }
            }

            for(let rowIx = 3; rowIx < board.length; rowIx++) {
                if(board[colIx][rowIx] === board[colIx+1][rowIx-1] &&
                board[colIx+1][rowIx-1] === board[colIx+2][rowIx-2] &&
                board[colIx+2][rowIx-2] === board[colIx+3][rowIx-3] &&
                board[colIx][rowIx] !== '') {
                    return board[colIx][rowIx]    
                }

            }
        }
        return ''
    }

    public static isBoardFull(board:string[][]) {
        for(const column of board) {
            for(const cell of column) {
                if(cell === '') return false
            }
        }
        return true
    }

    public static isValidMove(column:string[]) {
        for(const cell of column) {
            if(cell === '') {
                console.log('isValidMove TRUE')
                return true
            }
        }
        console.log('isValidMove FALSE')
        return false
    }
}

export default Util