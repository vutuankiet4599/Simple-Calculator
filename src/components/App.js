import React from 'react';
import '../styles/scss/App.scss';
import Button from './Button';
import ScreenDisplay from './ScreenDisplay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  state = {
    display: "0",
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handlePressKeyBoard, true);
  }

  handlePressKeyBoard = (event) => {
    let key = event.key;
    if (!isNaN(key) || key === "+" || key === "-" || key === "/" || key === "x") {
      let display = this.state.display + key;
      this.setState({
        display: display
      });
    } else if (key === "Backspace" || key === "Delete") {
      this.handleClickDeleteButton();
    } else if (key === "=") {
      this.handleClickEqualButton();
    }
  }

  handleClickNumberAndOperatorButton = (event) => {
    let display = this.state.display + event.target.value;
    this.setState({
      display: display,
    });
  }

  handleClickDeleteButton = () => {
    let newValue = this.state.display;
    newValue = newValue.slice(0, newValue.length - 1);
    this.setState({
      display: newValue
    })
  }

  calculate = (listNumber, listOperator) => {
    let lstNum = [...listNumber];
    let lstOp = [...listOperator];

    lstNum = lstNum.filter((item) => {
      return !isNaN(item);
    });

    let index = [];
    let result = 0;

    try {
      if ((lstNum.length - lstOp.length) !== 1) {
        toast.error("Wrong format!");
        return 0;
      }

      for (let i = 0; i < lstOp.length; i++) {
        if (lstOp[i] === 'x') {
          lstNum[i + 1] = lstNum[i] * lstNum[i + 1];
          index.push(i);
        } else if (lstOp[i] === '/') {
          if (lstNum[i + 1] === 0) {
            toast.error("Divide to zero!");
            return 0;
          }

          lstNum[i + 1] = lstNum[i] / lstNum[i + 1];
          index.push(i);
        }
      }

      for (let i = 0; i < index.length; i++) {
        lstNum.splice(index[i] - i, 1);
      }

      lstOp = lstOp.filter((item) => {
        return item === '+' || item === '-';
      });

      for (let i = 0; i < lstOp.length; i++) {
        if (lstOp[i] === '+') {
          lstNum[i + 1] = lstNum[i] + lstNum[i + 1];
        } else if (lstOp[i] === '-') {
          lstNum[i + 1] = lstNum[i] - lstNum[i + 1];
        }
      }

      result = lstNum[lstNum.length - 1];
    } catch (error) {
      toast.error("Something went wrong!");
    }

    return result;
  }
  handleClickEqualButton = () => {
    let data = this.state.display;
    let lstNum = data.split(/[+\-x/]/);

    lstNum = lstNum.map((item) => {
      return parseInt(item);
    })

    let lstOp = data.split('').filter(item => {
      return item === "+" || item === "-" || item === "x" || item === "/";
    })

    let result = this.calculate(lstNum, lstOp);
    result = result.toString();

    this.setState({
      display: result
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Simple Calculator Application</p>
        </header>
        <div className="Calculator">
          <ScreenDisplay display={this.state.display} />
          <Button
            handleClickNumberAndOperatorButton={this.handleClickNumberAndOperatorButton}
            handleClickDeleteButton={this.handleClickDeleteButton}
            handleClickEqualButton={this.handleClickEqualButton}
          />
        </div>
        <footer>
          <p className='footer'>This app is made by Vu Tuan Kiet</p>
        </footer>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </div>
    );
  }
}

export default App;

