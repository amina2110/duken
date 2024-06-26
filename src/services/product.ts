import {IProductUpdate} from "@/types/product";
///////////////////////For reviews/////////////////////////////////
import axios from "axios";
import {ReviewData} from "@/types/order";

const createProduct = async (items: { formData: IProductUpdate; token: string }) => {
  const response = await axios.post(process.env.NEXT_PUBLIC_URL + "/api/distributor/products", items.formData, {
    headers: {
      Authorization: "Bearer " + items.token,
    },
  });
  return response.data;
};

const getProducts = async (token: string) => {
  const response = await axios.get(process.env.NEXT_PUBLIC_URL + "/api/distributor/products", {
    headers: {
      Authorization: "Bearer " + token,
    },
    params: {
      page: 100,
      pageSize: 10,
    },
  });
  return response.data;
};

const getProductById = async (items: { id: string; token: string }) => {
  const response = await axios.get(process.env.NEXT_PUBLIC_URL + `/api/distributor/products/${items.id}`, {
    headers: {
      Authorization: "Bearer " + items.token,
    },
  });
  return response.data;
};

const updateProduct = async (items: { formData: IProductUpdate; token: string; id: string }) => {
  const response = await axios.put(process.env.NEXT_PUBLIC_URL + `/api/distributor/products/${items.id}`, items.formData, {
    headers: {
      Authorization: "Bearer " + items.token,
    },
  });
  return response.data;
};

const deleteProduct = async (items: { id: string; token: string }) => {
  const response = await axios.delete(process.env.NEXT_PUBLIC_URL + `/api/distributor/products/${items.id}`, {
    headers: {
      Authorization: "Bearer " + items.token,
    },
  });
  return response.data;
};

const uploadImage = async (items: { formData: any; token: string }) => {
  const response = await axios.post(process.env.NEXT_PUBLIC_URL + "/api/upload/image", items.formData, {
    headers: {
      Authorization: "Bearer " + items.token,
    },
  });
  return response.data;
};




export {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  uploadImage,
};
