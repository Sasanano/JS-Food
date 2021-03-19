function forms() {
     //Forms

     const forms = document.querySelectorAll('form');

     forms.forEach(item => {
         postData(item);
     });
 
     const message = {
         loading: 'Загрузка',
         success: 'Спасибо! Скоро мы с Вами свяжемся',
         failure: 'Что-то пошло не так...'
     };
 
     function postData(form) {
         form.addEventListener('submit', (e) => {
             e.preventDefault();
 
             const statusMessage = document.createElement('div');
             statusMessage.classList.add('status');
             statusMessage.textContent = message.loading;
             form.append(statusMessage);
 
             const formData = new FormData(form);
 
             const object = {};
             formData.forEach(function(value, key) {
                 object[key] = value;
             });
 
 
             fetch('server.php', {
                 method: "POST",
                 headers: {
                     'Content-type': 'application/json'
                 },
                 body: JSON.stringify(object)
             }).then(data => {
                 console.log(data);
                     statusMessage.textContent = message.success;
                     setTimeout(() => {
                         statusMessage.remove();
                     }, 2000);
 
             }).catch(() => {
                 statusMessage.textContent = message.failure;
             }).finally(() => {
                 form.reset();
             });
         });
     }; 
};

module.exports = forms;