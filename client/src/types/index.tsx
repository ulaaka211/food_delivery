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
  quantity: number;
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
  foodName: string;
  ingredients: string;
  discount: number;
  foodImg: string;
  price: number;
  category: string;
  editFood: string;
};

export type Category = {
  foodCategory: string;
};

export type updateCategoryParams = {
  editCategory: string;
  newCategory: string;
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
