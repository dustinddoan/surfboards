import React, { Component } from 'react'
import PageTop from '../utils/page_top'
import {frets} from '../utils/Form/fix_categories'

import { connect } from 'react-redux'
import { getBrands, getWoods } from '../../actions/product_actions'

import CollapseCheckbox from '../utils/collapse_checkbox'

class Shop extends Component {
    
    state = {
        grid: '',
        limit: 6,
        skip: 0,
        filters: {
            brand: [],
            frets: [],
            wood: [],
            price: []
        }
    }

    componentDidMount() {
        this.props.dispatch(getBrands())
        this.props.dispatch(getWoods())
    }

    handleFilters(filters, caterogy) {
        const newFilters = {...this.state.filters}
        newFilters[caterogy] = filters
        this.setState({
            filters: newFilters
        })
    }

    render() {
        console.log(this.state.filters)

        const products = this.props.products
        return (
        <div>
            <PageTop 
                title="Browse Products"
            />
            <div className="container">
                <div className="shop_wrapper">
                    <div className="left">
                        <CollapseCheckbox
                            initState={true}
                            title="Brands"
                            list={products.brands}
                            handleFilters={(filters) => this.handleFilters(filters, 'brand')}
                        />
                        <CollapseCheckbox
                            initState={false}
                            title="Frets"
                            list={frets}
                            handleFilters={(filters) => this.handleFilters(filters, 'frets')}
                        />
                        <CollapseCheckbox
                            initState={true}
                            title="Woods"
                            list={products.woods}
                            handleFilters={(filters) => this.handleFilters(filters, 'wood')}
                        />

                        
                    </div>
                    <div className="right">
                        right
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Shop)