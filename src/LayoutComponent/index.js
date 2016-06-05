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
  View
} from 'react-native';

import SLDS from 'react.force.base.theme';

import Component from './Component';

import Reference from './Reference';

import Phone from './Phone';

import Email from './Email';

import Currency from './Currency';


import LayoutImage from './LayoutImage';

import styles from './styles';



module.exports = React.createClass ({
  getDefaultProps(){
    return {
      sobj:{},
      layoutItem:{}
    };
  },
  getComponents(){
    return this.props.layoutItem.components.map((component)=>{
      return <Component sobj={this.props.sobj} layoutItem={component} />;
    });
  },
  getValue() {
    const val = this.props.sobj[this.props.layoutItem.value];
    if(val){
      return val;
    }
    return '-';
  },
  getBody() {

    if(this.props.layoutItem && this.props.layoutItem.components){
      return this.getComponents();
    }
    if(this.props.layoutItem && this.props.layoutItem.details && this.props.layoutItem.details.calculatedFormula && this.props.layoutItem.details.calculatedFormula.indexOf('IMAGE') === 0){
      return <LayoutImage 
          sobj={this.props.sobj} 
          layoutItem={this.props.layoutItem} 
          onLayoutTap={this.props.onLayoutTap}
          onSobjRequest={this.props.onSobjRequest}/>;
    }
    if(this.props.layoutItem && this.props.layoutItem.details && this.props.layoutItem.details.type === 'reference'){
      return (
        <Reference 
          sobj={this.props.sobj} 
          layoutItem={this.props.layoutItem} 
          onLayoutTap={this.props.onLayoutTap}
        />
      );
    }
    if(this.props.layoutItem && this.props.layoutItem.details && this.props.layoutItem.details.type === 'phone'){
      return (
        <Phone 
          sobj={this.props.sobj} 
          layoutItem={this.props.layoutItem} 
          onLayoutTap={this.props.onLayoutTap}
        />
      );
    }
    if(this.props.layoutItem && this.props.layoutItem.details && this.props.layoutItem.details.type === 'email'){
      return (
        <Email 
          sobj={this.props.sobj} 
          layoutItem={this.props.layoutItem} 
          onLayoutTap={this.props.onLayoutTap}
        />
      );
    }
    if(this.props.layoutItem && this.props.layoutItem.details && this.props.layoutItem.details.type === 'currency'){
      return (
        <Currency
          sobj={this.props.sobj} 
          layoutItem={this.props.layoutItem} 
        />
      );
    }
    return <SLDS.InputReadonly.ValueText>{this.getValue()}</SLDS.InputReadonly.ValueText>;
  },
  render() {
    return (
      <View>
        {this.getBody()}
      </View>
    )
  }
});
