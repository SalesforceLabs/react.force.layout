'use strict';

import React, {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import SLDS from 'react.force.base.theme';


module.exports = React.createClass ({
  render() {
    return <SLDS.InputReadonly.ValueText> ... </SLDS.InputReadonly.ValueText>;
  }
});
