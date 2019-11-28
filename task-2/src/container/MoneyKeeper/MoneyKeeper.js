import React, { Component } from 'react';
import ImputGroup from '../../components/InputGroup/InputGroup';
import CostsList from '../../components/CostsList/CostsList';
import PieChart from '../../components/PieChart/PieChart';

export default class MoneyKeeper extends Component {
  state = {
    item: '',
    price: null,
    select: '',
    costs: [],
    test: null
  }

  constructor() {
    super();
    this.state.test = new PieChart();
  }

  handleInputValue = e => {
    const target = e.target;
    const value = e.target.value;
    if (target.name === 'item') {
      this.setState({ item: value });
    } else {
      this.setState({ price: value });
    }
  }

  addNewCost = e => {
    e.preventDefault()
    this.setState(prevState => prevState.costs.push({ item: prevState.item, price: prevState.price, select: prevState.select }))
  }

  selector = e => {
    const select = e.target.value
    this.setState({ select });
  }

  removeCostsItem = (index) => {
    this.setState(prevState => prevState.costs.splice(index, 1))
  }

  changeStat = () => {
    let arr = [...this.state.costs];
    return arr = arr.reduce((accum, el) => {
      if (el.select === 'Car') {
        accum[0] += +el.price;
        return accum;
      } else {
        if (el.select === 'Food') {
          accum[1] += +el.price;
          return accum;
        } else {
          accum[2] += +el.price;
          return accum;
        }
      }
    }, [0, 0, 0])
  }

  render() {
    const pieChart = new PieChart(this.changeStat())
    return (
      <div>
        <h1 className="text-center my-5">Money Keeper</h1>
        <div className='row justify-content-center'>
          <div className="d-flex flex-column align-items-center">
            <ImputGroup handleInputValue={this.handleInputValue} addNewCost={this.addNewCost} selector={this.selector} />
            {pieChart.render()}
          </div>
          <CostsList costs={this.state.costs} removeCostsItem={this.removeCostsItem} />
        </div>
      </div>
    )
  }
}
