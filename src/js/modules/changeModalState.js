import checkInputNumberOrNo from './checkInputNumberOrNo';

const changeModalState = (state) => {
    const modalForm = document.querySelectorAll('.balcon_icons_img'),
        modalWidth = document.querySelectorAll('#width'),
        modalHeight = document.querySelectorAll('#height'),
        modalType = document.querySelectorAll('#view_type'),
        modalProfile = document.querySelectorAll('.checkbox');

    checkInputNumberOrNo('#width');
    checkInputNumberOrNo('#height');

    function bindActionToElement(event, element, property) {
       element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case "SPAN" :
                        state[property] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[property] = 'cold' : state[property] = 'warm';
                            element.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[property] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[property] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }

    bindActionToElement('click', modalForm, 'form');
    bindActionToElement('input', modalWidth, 'width');
    bindActionToElement('input', modalHeight, 'height');
    bindActionToElement('change', modalType, 'type');
    bindActionToElement('change', modalProfile, 'profile');

/*     modalForm.forEach((item, i) => {
        item.addEventListener('click', () => {
            state.form = i;
            console.log(state);
        });
    }); */
        
};

export default changeModalState;