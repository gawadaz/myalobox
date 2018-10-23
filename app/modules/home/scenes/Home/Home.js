import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';

import { actions as home } from '../../index';

import styles from './styles';
import Category from '../../components/Category';

const { getCategories } = home;

class Home extends Component {
    constructor() {
        super();
        this.state = {};

        this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.getCategories((error) => alert(error.message));
    }

    renderItem({ item, index }) {
        return <Category index={index} />;
    }

    render() {
        if (this.props.isLoading) {
            return (
                <View style={styles.activityIndicator}>
                    <ActivityIndicator animating={true} />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        ref='listRef'
                        data={this.props.categories}
                        renderItem={this.renderItem}
                        initialNumToRender={5}
                        keyExtractor={(item, index) => index.toString()} 
                    />
                </View>
            );
        }
    }
}

function mapStateToProps(state, props) {
    return {
        isLoading: state.homeReducer.isLoading,
        categories: state.homeReducer.categories
    };
}

export default connect(mapStateToProps, { getCategories })(Home);
