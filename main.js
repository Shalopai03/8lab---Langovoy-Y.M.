function get_all_resource() {
	fetch('https://dummyjson.com/products')
		.then(response => response.json())
		.then(({ products }) => {
			//извлекаем продукты
			const tableBody = document.querySelector('#productsTable tbody') // берем tbody
			if (!tableBody) return console.error('Таблица или <tbody> не найдены!')

			products.forEach(({ id, title, price, rating, stock }) => {
				tableBody.innerHTML += `
          <tr>
            <td>${id}</td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${rating}</td>
            <td>${stock}</td>
          </tr>`
			})
		})
		.catch(error => console.error('Ошибка:', error))
}

get_all_resource()

function toggleTab(element) {
	let tabId = element.dataset.tab || element.closest('.tab-content').id // определяем нажимаемую вкладку

	let tabContent = document.getElementById(`tab-${tabId}`)

	tabContent.style.display =
		tabContent.style.display === 'block' ? 'none' : 'block' // вкл/выкл вкладки
}
