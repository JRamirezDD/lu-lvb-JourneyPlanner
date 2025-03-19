import '@testing-library/jest-dom';
if (!window.URL.createObjectURL) {
  window.URL.createObjectURL = () => "blob://dummy-url";
}
if (!window.URL.revokeObjectURL) {
  window.URL.revokeObjectURL = () => {};
}