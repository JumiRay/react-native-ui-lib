import React, {useContext} from 'react';
import {TextStyle, StyleSheet} from 'react-native';
import Text from '../../components/text';
import FieldContext from './FieldContext';

export interface ValidationMessageProps {
  /**
   * Should support showing validation error message
   */
  enableErrors?: boolean;
  /**
   * The validation message to display when field is invalid (depends on validate)
   */
  validationMessage?: string;
  validationMessageStyle?: TextStyle;
  retainSpace?: boolean;
}

export default ({
  validationMessage,
  enableErrors,
  validationMessageStyle,
  retainSpace
}: ValidationMessageProps) => {
  const context = useContext(FieldContext);

  if (!enableErrors || (!retainSpace && context.isValid)) {
    return null;
  }

  return (
    <Text red30 style={[styles.validationMessage, validationMessageStyle]}>
      {context.isValid ? '' : validationMessage}
    </Text>
  );
};

const styles = StyleSheet.create({
  validationMessage: {
    minHeight: 20
  }
});
