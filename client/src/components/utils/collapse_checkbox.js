import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';

class CollapseCheckbox extends Component {
    state = {
        open: false,
        checked: []
    }

    componentDidMount() {
        if (this.props.initState) {
            this.setState({
                open: this.props.initState
            })
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open})
    }

    handleAngle = () => (
        this.state.open ?
        <FontAwesomeIcon
            icon={faAngleUp}
            className="icon"
        />
        :
        <FontAwesomeIcon
            icon={faAngleDown}
            className="icon"
        />
    )

    renderList = () => (
        this.props.list ?
            this.props.list.map((brand) => (
                <ListItem key={brand._id} style={{padding: '10px 0'}}>
                    <ListItemText primary={brand.name}/>
                    <ListItemSecondaryAction>
                        <Checkbox 
                            color="primary"
                            onChange={this.handgleToggle(brand._id)}
                            checked={this.state.checked.indexOf(brand._id) !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            ))
        : null
    )

    handgleToggle = (brandId) => () => {
        const { checked } = this.state
        const currentIndex = checked.indexOf(brandId);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(brandId)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        
        this.setState({
            checked: newChecked
        }, () => {
            this.props.handleFilters(newChecked)
        })
    }

    render() {
        return (
            <div className="collapse_items_wrapper">
                <List style={{borderBottom: '1px solid #dbdbdb'}}>
                    <ListItem onClick={this.handleClick} style={{padding: '10px 23px 10px 0'}}>
                        <ListItemText
                        primary={this.props.title}
                        className="collapse_title"
                        />
                        {this.handleAngle()}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto">
                        <List component="div" disablePadding>
                            {this.renderList()}
                        </List>
                    </Collapse>
                </List>
            </div>
        )
    }
}

export default CollapseCheckbox;