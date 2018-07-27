import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from 'common/utils';
import moment from 'moment';
import _ from 'lodash';
import style from './ChildComponent.less';
import parentStyle from '../ParentComponent/ParentComponent.less';

const cx = utils.classnames('');

class ChildComponent extends Component {
  render() {
    return <div className={cx(style.wrapper, parentStyle.child)} />;
  }
}

ChildComponent.propTypes = {};

ChildComponent.defaultProps = {};

export default ChildComponent;
