function calc (operator, id) {
  let number = $(`#card-${id} .number`).first();
  let currentVal = parseInt(number.text())
  
  
  if(operator == "+") currentVal = currentVal+ 1
  if(operator == "-") currentVal = currentVal- 1

  $.ajax({
    headers: {
      'ngrok-skip-browser-warning': 'true'
    },
    url: `${INITVAL.baseUrl}/${INITVAL.token}/${id}`,
    method: 'POST',
    data: {
      _method: "PUT",
      number: currentVal
    },
    beforeSend: function () {
      
    },
    success: function (response) {
      if(response.success){
        $(`#card-${id} .number`).first().html(response.data.number);
      }
    },
    error: function (xhr) {
      console.log(xhr)
    }
  });
}

function deletecard (id) {
  $.ajax({
    headers: {
      'ngrok-skip-browser-warning': 'true'
    },
    url: `${INITVAL.baseUrl}/${INITVAL.token}/${id}`,
    method: 'DELETE',
    beforeSend: function () {
      
    },
    success: function (response) {
      if(response.success){
        $(`#card-${id}`).first().remove()
      }
    },
    error: function (xhr) {
      console.log(xhr)
    }
  });
}

function card(data) {
  
  return /*html*/`
    <div class="prompt_card overflow-hidden" id="card-${data.id}">
      <div class="flex justify-between items-start gap-5">
        <div class="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <img src="assets/images/logo.svg" alt="user_image" width="40px" height="40px"
            class="rounded-full object-contain" >

          <div class="flex flex-col">
            <h3 class="font_satoshi font-semibold text-gray-900">Username</h3>
            <p class="font-inter text-sm text-gray-500 token">CounterApp</p>
          </div>
        </div>
        <div class="copy_btn" onClick={handleCopy}>
          <img src='assets/icons/tick.svg' alt="copy" width="12px" height="12px" >
        </div>
      </div>
      <p class="my-4 font-satoshi text-sm text-gray-700 max-h-[20vh] overflow-hidden title">${data.title}</p>

      <div class="text-4xl font-bold flex rounded-lg mt-2 p-3 text-gray-500 flex-1 justify-center number">${data.number}</div>
      <div class="flex gap-2 justify-center">
        <button class="px-5 py-1.5 text-sm border-primary-orange border-2 rounded-full text-primary-orange" onClick="calc('-', ${data.id})">
        -
        </button>
        <button class="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white" onClick="calc('+', ${data.id})">
        +
        </button>
      </div>

      <div class="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
        <a href="form.html?id=${data.id}" class="font-inter text-sm green_gradient cursor-pointer">
          Edit
        </a>
        <p class="font-inter text-sm orange_gradient cursor-pointer" onClick="deletecard(${data.id})">
          Delete
        </p>
      </div>
    </div>
    `
}