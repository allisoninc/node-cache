import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { ASTERISK } from '../../helpers/htmlConstants';
import { css } from '@patternfly/react-styles';
import { ValidatedOptions } from '../../helpers/constants';
export const FormGroup = (_a) => {
    var { children = null, className = '', label, labelInfo, labelIcon, isRequired = false, validated = 'default', isInline = false, hasNoPaddingTop = false, isStack = false, helperText, isHelperTextBeforeField = false, helperTextInvalid, helperTextIcon, helperTextInvalidIcon, fieldId } = _a, props = __rest(_a, ["children", "className", "label", "labelInfo", "labelIcon", "isRequired", "validated", "isInline", "hasNoPaddingTop", "isStack", "helperText", "isHelperTextBeforeField", "helperTextInvalid", "helperTextIcon", "helperTextInvalidIcon", "fieldId"]);
    const validHelperText = typeof helperText !== 'string' ? (helperText) : (React.createElement("div", { className: css(styles.formHelperText, validated === ValidatedOptions.success && styles.modifiers.success, validated === ValidatedOptions.warning && styles.modifiers.warning), id: `${fieldId}-helper`, "aria-live": "polite" },
        helperTextIcon && React.createElement("span", { className: css(styles.formHelperTextIcon) }, helperTextIcon),
        helperText));
    const inValidHelperText = typeof helperTextInvalid !== 'string' ? (helperTextInvalid) : (React.createElement("div", { className: css(styles.formHelperText, styles.modifiers.error), id: `${fieldId}-helper`, "aria-live": "polite" },
        helperTextInvalidIcon && React.createElement("span", { className: css(styles.formHelperTextIcon) }, helperTextInvalidIcon),
        helperTextInvalid));
    const showValidHelperTxt = (validationType) => validationType !== ValidatedOptions.error && helperText ? validHelperText : '';
    const helperTextToDisplay = validated === ValidatedOptions.error && helperTextInvalid ? inValidHelperText : showValidHelperTxt(validated);
    const labelContent = (React.createElement(React.Fragment, null,
        React.createElement("label", { className: css(styles.formLabel), htmlFor: fieldId },
            React.createElement("span", { className: css(styles.formLabelText) }, label),
            isRequired && (React.createElement("span", { className: css(styles.formLabelRequired), "aria-hidden": "true" },
                ' ',
                ASTERISK))),
        ' ',
        React.isValidElement(labelIcon) && labelIcon));
    return (React.createElement("div", Object.assign({}, props, { className: css(styles.formGroup, className) }),
        label && (React.createElement("div", { className: css(styles.formGroupLabel, labelInfo && styles.modifiers.info, hasNoPaddingTop && styles.modifiers.noPaddingTop) },
            labelInfo && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: css(styles.formGroupLabelMain) }, labelContent),
                React.createElement("div", { className: css(styles.formGroupLabelInfo) }, labelInfo))),
            !labelInfo && labelContent)),
        React.createElement("div", { className: css(styles.formGroupControl, isInline && styles.modifiers.inline, isStack && styles.modifiers.stack) },
            isHelperTextBeforeField && helperTextToDisplay,
            children,
            !isHelperTextBeforeField && helperTextToDisplay)));
};
FormGroup.displayName = 'FormGroup';
//# sourceMappingURL=FormGroup.js.map