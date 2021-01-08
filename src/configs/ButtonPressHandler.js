export const ButtonPressHandler = (key, showResult) => {
	const specialButtonHandler = (id) => {
    if(id === 'shift+=' || id === '+') return 'plus';
    if(id === '-') return 'minus';
    if(id === 'shift+8' || id === '*') return 'mlt';
    if(id === '/') return 'div';
    if(id === 'c' || id === 'backspace') {
      if(showResult) return 'all-clear';
      return 'clear-entry';
    }
    return '';
  };
  const handleClick = (id) => {
    let btnId = id;
    if(['shift+=','+','-','shift+8','*','/','c','backspace'].includes(id)) {
      btnId = specialButtonHandler(id);
    }
    if(btnId === 'all-clear') {
      document.querySelector(`#btn-${btnId}`).click();
    } else {
      document.querySelector(`#btn-${btnId}`).click();
      document.querySelector(`#btn-${btnId}`).classList.add("btn-click");
      setTimeout(() => {
        document.querySelector(`#btn-${btnId}`).classList.remove("btn-click");
      }, 100);
    }

  };
	const handleKeyEvent = (key) => {
		console.log(`${key} pressed!`);
    handleClick(key);
	};

	handleKeyEvent(key);
}