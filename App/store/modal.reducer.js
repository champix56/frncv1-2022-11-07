const initialState = {
  isOpen: false,
  message: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'open':
      return {isOpen: true, message: payload.message};
    case 'close':
      return {isOpen: false, message: ''};
    default:
      return state;
  }
};
