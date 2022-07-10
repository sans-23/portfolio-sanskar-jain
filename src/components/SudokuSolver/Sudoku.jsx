import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import ReactLoading from 'react-loading';

var empty = [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
]

export default function Sudoku(props){
    const [initial, setInitial] = useState(getDeepCopy(empty));
    const [sudokuArr, setSudokuArr] = useState(getDeepCopy(empty));
    function getDeepCopy(arr){
        return JSON.parse(JSON.stringify(arr));
    }
    function onInputChange(e,row,col){
        var val = parseInt(e.target.value) || -1;
        var grid = getDeepCopy(sudokuArr);
        if(val===-1) grid[row][col] = val;
        else if((val>=1 && val<=9) && isSafe(row,col,val,grid)) grid[row][col] = val;
        setSudokuArr(grid);
    }
    function unUsedInBox(rowStart, colStart, num, grid){
        for (var i = 0; i < 3; i++)
            for (var j = 0; j < 3; j++)
                if (grid[rowStart + i][colStart + j] === num)
                    return false;
        return true;
    }
    function isSafe(i, j, m, grid){
        for(let k=0; k<9; k++) 
            if(grid[i][k]===m || grid[k][j]===m) return false;
        var rowStart = i - i%3;
        var colStart = j - j%3;
        return unUsedInBox(rowStart, colStart, m, grid);
    }
    function solver(grid){
        let i,j;
        for(i=0; i<9; i++){
            for(j=0; j<9; j++){
                if(grid[i][j]===-1) break;
            }
            if(grid[i][j]===-1) break;
        }
        if(i===9 && j===9) return true;
        for(let num=1; num<=9; num++){
            if(isSafe(i,j,num,grid)){
                grid[i][j] = num;
                if(solver(grid)) return true;
                grid[i][j] = -1
            }
        }
        return false;
    }
    function solveSudoku(){
        let sudoku = getDeepCopy(initial);
        solver(sudoku);
        setSudokuArr(sudoku);
    }
    function resetSudoku(){
        let sudoku = getDeepCopy(initial);
        setSudokuArr(sudoku);
    }
    function newSudoku(){
        let sudoku = getDeepCopy(empty);
        generateSudoku(sudoku);
        setInitial(sudoku);
        setSudokuArr(sudoku);
    }
    function generateSudoku(grid){
        for (var i = 0; i < 9; i = i + 3)
            fillBox(i, i,grid);
        solver(grid);
        removeKDigits(grid);
    }
    function fillBox(row, col, grid)
    {
        var num;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                do {
                    num = Math.floor(Math.random() * 9)+1;
                } while (!unUsedInBox(row, col, num, grid));
                grid[row + i][col + j] = num;
            }
        }
    }
    function removeKDigits(grid){
        var count = 46;
        while (count) {
            var cellId = Math.floor(Math.random()*81);
            let i = Math.floor(cellId / 9);
            let j = cellId % 9;
            console.log(i, j)
            if (grid[i][j] !== -1) {
                count--;
                grid[i][j] = -1;
            }
        }
    }
    const [loading, setLoading] = useState(true);
      
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 5000));
        setLoading((loading) => !loading);
      };
        
      loadData();
    }, [])
    return loading ? (<div className={styles.loader}><ReactLoading type="bubbles" color="#1DA1F2" height={90} width={90} /></div>) : (
        <div>
            <div className={styles.wrapper}>
            <div class={styles.title}>
                <h3>Sudoku <span>Solver</span><span class={styles.bgText}>Play</span></h3>
            </div>
            <br/><br/>
                <table>
                    <tbody>
                        {
                            [0,1,2,3,4,5,6,7,8].map((row, rIndex) => {
                                return <tr key={rIndex}>
                                    {
                                        [0,1,2,3,4,5,6,7,8].map((col, cIndex) => {
                                            return  <td key={rIndex+cIndex*101}>
                                                        <input onChange={(e) => onInputChange(e,row,col)} 
                                                        type="number"
                                                        value={sudokuArr[row][col]===-1 ? '':sudokuArr[row][col]}  
                                                        className={styles.cellInput} 
                                                        disabled={initial[row][col] !==-1 }
                                                        />
                                                    </td>
                                        })
                                    }
                                    
                                </tr>
                            })
                        }
                    </tbody> 
                </table>
                <div className={styles.buttonContainer}>
                    <button onClick={newSudoku} className={styles.checkBtn}>New</button>
                    <button onClick={solveSudoku} className={styles.solveBtn}>Solve</button>
                    <button onClick={resetSudoku} className={styles.resetBtn}>Reset</button>
                </div>
            </div>
        </div>
    )
}