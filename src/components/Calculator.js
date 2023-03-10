import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    calc: {
      total: null,
      next: null,
      operation: null,
    },
  });
  const handleEvent = (e) => {
    setData(({ calc }) => ({
      calc: calculate(calc, e.target.value),
    }));
  };
  return (
    <div className="main-calculator">
      <div className="calculator-wrap">
        <div className="calculator-result">
          {data.calc.total || ''}
          {data.calc.operation || ''}
          {data.calc.next || ''}
        </div>
        <div className="operation-container">
          <div className="calculator-upper">
            <div className="calculator-number">
              <button type="button" alt="" onClick={handleEvent} value="AC">
                AC
              </button>
              <button type="button" alt="" onClick={handleEvent} value="+/-">
                +/-
              </button>
              <button type="button" alt="" onClick={handleEvent} value="%">
                %
              </button>
            </div>
            <div className="calculator-lower">
              <div className="calculator-number">
                <button type="button" alt="" onClick={handleEvent} value="7">
                  7
                </button>
                <button type="button" alt="" onClick={handleEvent} value="8">
                  8
                </button>
                <button type="button" alt="" onClick={handleEvent} value="9">
                  9
                </button>
              </div>
              <div className="calculator-number">
                <button type="button" alt="" onClick={handleEvent} value="4">
                  4
                </button>
                <button type="button" alt="" onClick={handleEvent} value="5">
                  5
                </button>
                <button type="button" alt="" onClick={handleEvent} value="6">
                  6
                </button>
              </div>
              <div className="calculator-number">
                <button type="button" alt="" onClick={handleEvent} value="1">
                  1
                </button>
                <button type="button" alt="" onClick={handleEvent} value="2">
                  2
                </button>
                <button type="button" alt="" onClick={handleEvent} value="3">
                  3
                </button>
              </div>
              <div className="calculator-zero">
                <button type="button" alt="" onClick={handleEvent} value="0">
                  0
                </button>
                <button type="button" alt="" onClick={handleEvent} value=".">
                  .
                </button>
              </div>
            </div>
          </div>
          <div className="calculator-operation">
            <button type="button" alt="" onClick={handleEvent} value="??">
              ??
            </button>
            <button type="button" alt="" onClick={handleEvent} value="x">
              x
            </button>
            <button type="button" alt="" onClick={handleEvent} value="-">
              -
            </button>
            <button type="button" alt="" onClick={handleEvent} value="+">
              +
            </button>
            <button type="button" alt="" onClick={handleEvent} value="=">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
