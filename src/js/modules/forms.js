import checkInputNumberOrNo from './checkInputNumberOrNo';

const forms = (state) => {

    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');
        
        checkInputNumberOrNo('input[name="user_phone"');

    const sendingStatus = {
        load: 'Загрузка...',
        success: 'Сообщение отправлено',
        err: 'Упс, что-то не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = sendingStatus.load;
        let result = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await result.text();
    };

    const clearInputs = () => {
        input.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute("data-calc") === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(result => {
                    console.log(result);
                    statusMessage.textContent = sendingStatus.success;
                })
                .catch(() => statusMessage.textContent = sendingStatus.err)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
            
        });
    });

};

export default forms;