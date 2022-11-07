import React from 'react';
import {Text, View} from 'react-native';
import TemplateNameStylesheet from './TemplateName.styles';

const TemplateName = props => {
  return (
    <View style={TemplateNameStylesheet.TemplateName} testID="TemplateName">
      <Text>templateName</Text>
    </View>
  );
};
export default TemplateName;
