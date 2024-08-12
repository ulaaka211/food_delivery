export type foodParams = {
  _id?: string;
  foodName: string;
  ingredients: string;
  discount: number;
  foodImg: string;
  price: number;
  category: string;
};

export type cartItem = {
  foodId?: string;
  foodName: string;
  ingredients: string;
  discount: number;
  foodImg: string;
  price: number;
  category: string;
  foodCount: number;
};

export type signupParams = {
  email: string;
  password: string;
  phone: string;
  name: string;
  address: string;
};

export type loginParams = {
  email: string;
  password: string;
};

export type checkresetemailParams = {
  email: string;
};

export type checkresetotbParams = {
  email: string;
  otp: string;
  password: string;
};

export type updateFoodParams = {
  _id?: string;
  foodName: string;
  ingredients: string;
  discount: number;
  foodImg: string;
  price: number;
  category: string;
};

export type Category = {
  _id?: string;
  foodCategory: string;
};

export type updateCategoryParams = {
  _id?: string;
  foodCategory: string;
};

export type DeliveryAddress = {
  additional: string;
  bair: string;
  district: string;
  khoroo: string;
  paymentMethod: boolean;
  phone: string;
};

export type Order = {
  createdAt: Date;
  deliveryStatus: string;
  userID: string;
  _v: number;
  _id: string;
  deliveryAddress: DeliveryAddress[];
  foods: cartItem[];
};
