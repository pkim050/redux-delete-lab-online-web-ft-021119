import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
<<<<<<< HEAD
      const band = {id: uuid(), name: action.name}
      return { bands: state.bands.concat(band) }

    case 'DELETE_BAND':
      let temp = {}
      if (action.id) {
        temp = { bands: state.bands.filter(band => band.id !== action.id)}
      }
      else if (action.name) {
        temp = { bands: state.bands.filter(band => band.name !== action.name)}
      }
      return temp
=======
      const band = {
        id: uuid()
        bandName: action.name
      }
      return { bands: state.bands.concat(band) }

    case 'DELETE_BAND':
      return { bands: state.bands.filter(band => band.id !=== action.payload)
>>>>>>> bcb6a6cf52ab6b9cd43bf6dfd2a2f755de8f718e

    default:
      return state;
  }
};
