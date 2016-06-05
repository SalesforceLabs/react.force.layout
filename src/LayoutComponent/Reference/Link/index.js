/*
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
 
'use strict';

import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import SLDS from 'react.force.base.theme';


module.exports = React.createClass ({
  contextTypes: {
    sobj: React.PropTypes.object,
    compactLayout: React.PropTypes.object,
    defaultLayout: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      sobj:{attributes:{compactTitle:' '}}
    };
  },
  handlePress(){
    if(this.props.onLayoutTap){
      this.props.onLayoutTap(
        {
          refSobj:this.context.sobj,
          layoutItem:this.props.layoutItem,
          sobj:this.props.parentSobj,
          eventType:this.props.layoutItem.details.type,
          value:this.props.sobj[this.props.layoutItem.details.name]
        }
      );
    }
  },
  render() {
    return (
      <TouchableOpacity 
        onPress={this.handlePress}>
        <View>
          <SLDS.InputReadonly.ValueText 
            style={{
              paddingLeft:22,
              color:'#0070d2'
            }}>
            {this.context.sobj.attributes.compactTitle?this.context.sobj.attributes.compactTitle:' '}
          </SLDS.InputReadonly.ValueText>
          <View 
            style={{
              position:'absolute',
              top:12,
              left:0,
              height:20,
              width:20,
            }}>
            <SLDS.Icons.Utility 
              name='link' 
              style={{
                width:16,
                height:16
              }} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
});
