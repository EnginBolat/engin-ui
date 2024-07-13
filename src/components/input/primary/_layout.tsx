import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  type KeyboardTypeOptions,
  type NativeSyntheticEvent,
  type TextInputFocusEventData,
  type TextInputChangeEventData,
  type TextInputContentSizeChangeEventData,
  type TextInputEndEditingEventData,
  type NativeTouchEvent,
  type TextInputSelectionChangeEventData,
  type TextInputSubmitEditingEventData,
  type TextInputTextInputEventData,
  type TextInputKeyPressEventData,
  Text,
} from 'react-native';

type TextContentTypeType =
  | 'none'
  | 'URL'
  | 'addressCity'
  | 'addressCityAndState'
  | 'addressState'
  | 'countryName'
  | 'creditCardNumber'
  | 'creditCardExpiration'
  | 'creditCardExpirationMonth'
  | 'creditCardExpirationYear'
  | 'creditCardSecurityCode'
  | 'creditCardType'
  | 'creditCardName'
  | 'creditCardGivenName'
  | 'creditCardMiddleName'
  | 'creditCardFamilyName'
  | 'emailAddress'
  | 'familyName'
  | 'fullStreetAddress'
  | 'givenName'
  | 'jobTitle'
  | 'location'
  | 'middleName'
  | 'name'
  | 'namePrefix'
  | 'nameSuffix'
  | 'nickname'
  | 'organizationName'
  | 'postalCode'
  | 'streetAddressLine1'
  | 'streetAddressLine2'
  | 'sublocality'
  | 'telephoneNumber'
  | 'username'
  | 'password'
  | 'newPassword'
  | 'oneTimeCode'
  | 'birthdate'
  | 'birthdateDay'
  | 'birthdateMonth'
  | 'birthdateYear';

type ImportantForAutofillType =
  | 'auto'
  | 'no'
  | 'noExcludeDescendants'
  | 'yes'
  | 'yesExcludeDescendants';

type MaxLengthTextAlignType = 'right' | 'left' | 'auto' | 'justify';

interface ITextInput {
  id?: string;
  keyboardAppearance?: 'default' | 'light' | 'dark';
  enablesReturnKeyAutomatically?: boolean;
  spellCheck?: boolean;
  smartInsertDelete?: boolean;
  numberOfLines?: number;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  showMaxLength?: boolean;
  isHaveShadow?: boolean;
  showMaxLengthTextAlign?: MaxLengthTextAlignType;
  multiline?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  secureTextEntry?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  value?: string;
  importantForAutofill?: ImportantForAutofillType;
  textContentType?: TextContentTypeType;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeText?: (text: string) => void;
  onContentSizeChange?: (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
  ) => void;
  onEndEditing?: (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => void;
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onPressIn?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onPressOut?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onSelectionChange?: (
    e: NativeSyntheticEvent<TextInputSelectionChangeEventData>
  ) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  onTextInput?: (e: NativeSyntheticEvent<TextInputTextInputEventData>) => void;
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
}

const TextInput = ({
  id,
  keyboardAppearance,
  enablesReturnKeyAutomatically,
  spellCheck,
  smartInsertDelete,
  numberOfLines,
  keyboardType,
  maxLength,
  showMaxLength,
  showMaxLengthTextAlign = 'right',
  isHaveShadow = true,
  multiline,
  placeholder,
  readOnly,
  secureTextEntry,
  textAlign,
  value,
  importantForAutofill,
  onBlur,
  onChange,
  onChangeText,
  onContentSizeChange,
  onEndEditing,
  onPress,
  onPressIn,
  onPressOut,
  onFocus,
  onSelectionChange,
  onSubmitEditing,
  onTextInput,
  onKeyPress,
}: Readonly<ITextInput>) => {
  return (
    <View style={styles({ isHaveShadow: isHaveShadow }).container}>
      <RNTextInput
        id={id}
        keyboardAppearance={keyboardAppearance}
        enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
        spellCheck={spellCheck}
        smartInsertDelete={smartInsertDelete}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiline}
        placeholder={placeholder}
        readOnly={readOnly}
        secureTextEntry={secureTextEntry}
        textAlign={textAlign}
        value={value}
        importantForAutofill={importantForAutofill}
        onBlur={onBlur}
        onChange={onChange}
        onChangeText={onChangeText}
        onContentSizeChange={onContentSizeChange}
        onEndEditing={onEndEditing}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onFocus={onFocus}
        onSelectionChange={onSelectionChange}
        onSubmitEditing={onSubmitEditing}
        onTextInput={onTextInput}
        onKeyPress={onKeyPress}
        style={styles().input}
      />
      {showMaxLength && (
        <Text
          style={
            styles({ showMaxLengthTextAlign: showMaxLengthTextAlign })
              .showMaxLength
          }
        >{`${value?.length}/${maxLength}`}</Text>
      )}
    </View>
  );
};

export default TextInput;

interface StyleProps {
  showMaxLengthTextAlign?: MaxLengthTextAlignType;
  isHaveShadow?: boolean;
}

const styles = ({
  showMaxLengthTextAlign,
  isHaveShadow,
}: Readonly<StyleProps> = {}) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      shadowColor: 'rgba(0,0,0,.10)',
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: isHaveShadow ? 1 : 0,
    },
    input: {
      width: '100%',
      borderWidth: 1,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderColor: 'rgba(0,0,0,.10)',
      borderStyle: 'solid',
      backgroundColor: 'white',
      alignItems: 'flex-start',
      borderRadius: 12,
    },
    showMaxLength: {
      paddingTop: 4,
      paddingBottom: 4,
      color: 'grey',
      textAlign: showMaxLengthTextAlign,
    },
  });
};
