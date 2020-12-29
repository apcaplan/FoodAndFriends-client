import apiUrl from '../apiConfig'
import axios from 'axios'

// Customer related actions
export const createCustomer = (customer, user) => {
  return axios({
    url: apiUrl + '/customers',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      customer: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        street: customer.street,
        city: customer.city,
        state: customer.state,
        zip: customer.zip,
        phone: customer.phone,
        deliveryNotes: customer.deliveryNotes,
        paymentType: customer.paymentType,
        creditNo: customer.creditNo,
        creditExp: customer.creditExp,
        creditCode: customer.creditCode,
        creditStreet: customer.creditStreet,
        creditCity: customer.creditCity,
        creditState: customer.creditState,
        creditZip: customer.creditZip
      }
    }
  })
}

export const showCustomer = (user) => {
  return axios({
    url: apiUrl + '/customers',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const getCustomer = (customer, user) => {
  return axios({
    url: apiUrl + `/customers/${customer}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const editCustomer = (data, user) => {
  return axios ({
    url: `${apiUrl}/customers/${data.customersId}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
        customer: {
          firstName: data.firstName,
          lastName: data.lastName,
          street: data.street,
          city: data.city,
          state: data.state,
          zip: data.zip,
          phone: data.phone,
          deliveryNotes: data.deliveryNotes,
          paymentType: data.paymentType,
          creditNo: data.creditNo,
          creditExp: data.creditExp,
          creditCode: data.creditCode,
          creditStreet: data.creditStreet,
          creditCity: data.creditCity,
          creditState: data.creditState,
          creditZip: data.creditZip
      }
    }
  })
}

export const destroyCustomer = (id, user) => {
  return axios({
    url: `${apiUrl}/customers/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`,
    }
  })
}


// Order related actions
export const showOrders = (id, user) => {
  return axios({
    url: `${apiUrl}/orders/${id}/orders`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const getOrder = (order, user) => {
  return axios({
    url: apiUrl + `/orders/${order}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const createOrder = (user, data) => {
  return axios({
    url: `${apiUrl}/orders`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    data: { order: {...data} }
  })
}

export const editOrder = (user, data) => {
  return axios ({
    url: `${apiUrl}/orders/${data.orderId}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { order: {
      food: data.food,
      date: data.date
    }}
  })
}

export const destroyOrder = (id, user) => {
  return axios({
    url: `${apiUrl}/orders/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`,
    }
  })
}
