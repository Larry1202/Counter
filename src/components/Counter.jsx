import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './counter.css'
import '../font/Avenir/Avenir-Black.woff'

class Counter extends Component{
    constructor (props) {
        super(props);
    
        this.state = {
          count: this.props.count,
          inputValue: this.props.count,
        };
      }
    
      componentDidUpdate (prevProps) {
        if (prevProps.count !== this.props.count) {
          this.setState(
            {
              count: this.props.count,
              inputValue: this.props.count.toString(),
            },
            this.handleChangeCount
          );
        }
      }
    
      decrement = () => {
        const { count } = this.state;
        const { min } = this.props;
    
        if (count <= min) {
          return;
        }
    
        this.setState(
          state => {
            const count = state.count - 1;
            return {
              count,
              inputValue: count.toString(),
            };
          },
          this.handleChangeCount
        );
      };
    
      increment = () => {
        const { count } = this.state;
        const { max } = this.props;
    
        if (count >= max) {
          return;
        }
    
        this.setState(
          state => {
            const count = state.count + 1;
    
            return {
              count,
              inputValue: count.toString(),
            };
          },
          this.handleChangeCount
        );
      };
    
      handleBlur  = () => {
        const { inputValue, count } = this.state;
        let num = parseInt(inputValue);
        num = num > this.props.max ? this.props.max : num;
        num = num < this.props.min ? this.props.min : num;
    
        if (isNaN(num) === true) {
          this.setState({ inputValue: count });
        }
        else {
          this.setState(
            {
              count: num,
              inputValue: num.toString(),
            },
            this.handleChangeCount
          );
        }
      };
    
      handleChangeCount = () => {
        if (this.props.onCountChange !== undefined) {
          this.props.onCountChange(this.state.count);
        }
      };
    
      handleChangeInput = ({ target: { value: inputValue }}) => {
        this.setState({ inputValue });
      };
    

    render (){
        return this.props.children({
            decrement: this.decrement,
            handleChangeInput: this.handleChangeInput,
            handleBlur: this.handleBlur,
            increment: this.increment,
            state: this.state,
        })
    }
}

        const renderChildren = ({
            decrement,
            handleChangeInput,
            handleBlur,
            increment,
            state: { inputValue },
            style,
          }) => (

        <div className="counter">
            <div className="wrapper">

            <button id="decrement"
            onClick={decrement}>
                -
            </button>

            <input
            input="text"
            id="count"
            value={inputValue}
            onChange={handleChangeInput}
            onBlur={handleBlur}
            >
            </input>
            
            <button
            id="increment"
            onClick={increment} 
            >
                +
            </button>
            </div>
        </div>
        );

        Counter.defaultProps = {
            children: renderChildren,
            count: 1,
            max: Infinity,
            min: -Infinity,
          };
          
          Counter.propTypes = {
            count: PropTypes.number,
            max: PropTypes.number,
            min: PropTypes.number,
            onCountChange: PropTypes.func,
          };


export default Counter;