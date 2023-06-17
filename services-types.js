const apiURL = "http://localhost:3000"

async function getServicesList() {
    console.log('getServicesList')
    const response = await fetch('http://localhost:3000/api/services')
    const data = await response.json()
    
    const services = document.querySelectorAll('tr > td')
  
    services.forEach(td => {
      const tr = td.parentNode
      tr.remove()
    })
  
    const servicesListContainer = document.getElementById('service-list-container')
  
    data.forEach(service => {
        const newServiceTr = document.createElement('tr')
        
        newServiceTr.id = service.id
        newServiceTr.innerHTML = `
          <td>${service.name}</td>
          <td>${service.price}</td>
          <td>${service.duration}</td>
          <button
	    class="delete-button"
	    type="button"
	    onclick="deleteServices(${service.id})"
	  >
	    Excluir
	  </button>
        `
  
        servicesListContainer.appendChild(newServiceTr)
    })
  }

  async function deleteServices(serviceId) {
    const deleteResult = await fetch (`${apiURL}/api/services/${serviceId}`, {
      method: "DELETE",
    })
  
    const deleteResultJson = await deleteResult.json()
  
    if  (deleteResultJson.deleteServicesCount < 1) {
      console.error("Nenhum serviço foi deletado")
      return
    }
  
    /*const serviceToBeDeleted = document.getElementById(`service-id-${serviceId}`)
    serviceToBeDeleted.remove()
  
    return deleteResultJson*/
   }
  
  getServicesList()
  
  const createServicesButton = document.getElementById('create-service-button')
  
  createServicesButton.addEventListener('click', async (event) => {
      event.preventDefault()
  
      const name = document.querySelector('input[name="name"]').value
      const price = document.querySelector('input[name="price"]').value
      const duration = document.querySelector('input[name="duration"]').value
      
  
      await fetch('http://localhost:3000/api/services', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
              name,
              price,
              duration,
          })
      })
  
      await getServicesList()
  })