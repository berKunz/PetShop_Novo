const apiURL = "http://localhost:3000"

async function deleteUser(userId) {
  const deleteResult = await fetch (`${apiURL}/api/user/${userId}`, {
    method: "DELETE",
  })

  const deleteResultJson = await deleteResult.json()

  if  (deleteResultJson.deleteUsersCount < 1) {
    console.error("Nenhum usuário foi deletado")
    return
  }

  const userToBeDeleted = document.getElementById(`user-id-${userId}`)
  userToBeDeleted.remove()

  return deleteResultJson
 }


async function deleteAnimal(animalId) {
  const deleteResult = await fetch (`${apiURL}/api/animals/${animalId}`, {
    method: "DELETE",
  })

  const deleteResultJson = await deleteResult.json()

  if  (deleteResultJson.deleteAnimalsCount < 1) {
    console.error("Nenhum animal foi deletado")
    return
  }

  const animalToBeDeleted = document.getElementById(`animal-id-${animalId}`)
  animalToBeDeleted.remove()

  return deleteResultJson
 }


async function deleteService(serviceId) {
  const deleteResult = await fetch (`${apiURL}/api/service/${serviceId}`, {
    method: "DELETE",
  })

  const deleteResultJson = await deleteResult.json()

  if  (deleteResultJson.deleteServicesCount < 1) {
    console.error("Nenhum serviço foi deletado")
    return
  }

  const serviceToBeDeleted = document.getElementById(`service-id-${serviceId}`)
  serviceToBeDeleted.remove()

  return deleteResultJson
 }