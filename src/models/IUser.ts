export type IUser = {
  id: number
  email: string
  address: {
    address: string
    country: string
    city: string
    postalCode: string
    state: string
    stateCode: string
    coordinates: {
      lat: string
      lng: string
    }
  }
  age: number
  bank: {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }
  birthDate: string
  bloodGroup: string
  firstName: string
  profilePic: string
  company: {
    address: {
      coordinates: {
        lat: string
        lng: string
      }
      address: string
      city: string
      country: string
      postalCode: string
      state: string
      stateCode: string
    }
    department: string
    name: string
    title: string
  }
  ein: string
  eyeColor: string
  gender: string
  height: string
  image: string
  ip: string
  lastName: string
  macAddress: string
  maidenName: string
  password: string
  phone: string
  role: string
  ssn: string
  university: string
  userAgent: string
  username: string
  weight: number
  hair: {
    color: string
    type: string
  }
  crypto: {
    coin: string
    network: string
    wallet: string
  }
}

export type Response = {
  limit: number
  skip: number
  total: number
}

export type UsersResponse = Response & {
  users: IUser[]
}
