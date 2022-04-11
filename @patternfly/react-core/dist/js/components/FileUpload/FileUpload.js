"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpload = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_dropzone_1 = tslib_1.__importDefault(require("react-dropzone"));
const FileUploadField_1 = require("./FileUploadField");
const fileUtils_1 = require("../../helpers/fileUtils");
const file_selector_1 = require("file-selector");
const FileUpload = (_a) => {
    var { id, type, value = type === fileUtils_1.fileReaderType.text || type === fileUtils_1.fileReaderType.dataURL ? '' : null, filename = '', children = null, onChange = () => { }, onFileInputChange = null, onReadStarted = () => { }, onReadFinished = () => { }, onReadFailed = () => { }, onClearClick, onClick = event => event.preventDefault(), onTextChange, onDataChange, dropzoneProps = {} } = _a, props = tslib_1.__rest(_a, ["id", "type", "value", "filename", "children", "onChange", "onFileInputChange", "onReadStarted", "onReadFinished", "onReadFailed", "onClearClick", "onClick", "onTextChange", "onDataChange", "dropzoneProps"]);
    const onDropAccepted = (acceptedFiles, event) => {
        if (acceptedFiles.length > 0) {
            const fileHandle = acceptedFiles[0];
            if (event.type === 'drop') {
                onFileInputChange === null || onFileInputChange === void 0 ? void 0 : onFileInputChange(event, fileHandle);
            }
            if (type === fileUtils_1.fileReaderType.text || type === fileUtils_1.fileReaderType.dataURL) {
                onChange('', fileHandle.name, event); // Show the filename while reading
                onReadStarted(fileHandle);
                fileUtils_1.readFile(fileHandle, type)
                    .then(data => {
                    onReadFinished(fileHandle);
                    onChange(data, fileHandle.name, event);
                    onDataChange === null || onDataChange === void 0 ? void 0 : onDataChange(data);
                })
                    .catch((error) => {
                    onReadFailed(error, fileHandle);
                    onReadFinished(fileHandle);
                    onChange('', '', event); // Clear the filename field on a failure
                    onDataChange === null || onDataChange === void 0 ? void 0 : onDataChange('');
                });
            }
            else {
                onChange(fileHandle, fileHandle.name, event);
            }
        }
        dropzoneProps.onDropAccepted && dropzoneProps.onDropAccepted(acceptedFiles, event);
    };
    const onDropRejected = (rejectedFiles, event) => {
        if (rejectedFiles.length > 0) {
            onChange('', rejectedFiles[0].name, event);
        }
        dropzoneProps.onDropRejected && dropzoneProps.onDropRejected(rejectedFiles, event);
    };
    const fileInputRef = React.useRef();
    const setFileValue = (filename) => {
        fileInputRef.current.value = filename;
    };
    const onClearButtonClick = (event) => {
        onChange('', '', event);
        onClearClick === null || onClearClick === void 0 ? void 0 : onClearClick(event);
        setFileValue(null);
    };
    return (React.createElement(react_dropzone_1.default, Object.assign({ multiple: false }, dropzoneProps, { onDropAccepted: onDropAccepted, onDropRejected: onDropRejected }), ({ getRootProps, getInputProps, isDragActive, open }) => {
        const oldInputProps = getInputProps();
        const inputProps = Object.assign(Object.assign({}, oldInputProps), { onChange: (e) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                var _a;
                (_a = oldInputProps.onChange) === null || _a === void 0 ? void 0 : _a.call(oldInputProps, e);
                const files = yield file_selector_1.fromEvent(e.nativeEvent);
                if (files.length === 1) {
                    onFileInputChange === null || onFileInputChange === void 0 ? void 0 : onFileInputChange(e, files[0]);
                }
            }) });
        return (React.createElement(FileUploadField_1.FileUploadField, Object.assign({}, getRootProps(Object.assign(Object.assign({}, props), { refKey: 'containerRef', onClick: event => event.preventDefault() })), { tabIndex: null, id: id, type: type, filename: filename, value: value, onChange: onChange, isDragActive: isDragActive, onBrowseButtonClick: open, onClearButtonClick: onClearButtonClick, onTextAreaClick: onClick, onTextChange: onTextChange }),
            React.createElement("input", Object.assign({}, inputProps, { ref: input => {
                    fileInputRef.current = input;
                    inputProps.ref(input);
                } })),
            children));
    }));
};
exports.FileUpload = FileUpload;
exports.FileUpload.displayName = 'FileUpload';
//# sourceMappingURL=FileUpload.js.map