import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getAllCustomers = async () => {
  try {
    const response = await axios.get(`${API_URL}/all_customers_data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    return [];
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/all_products_data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getCustomerInfo = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/customer_data/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer info:", error);
    return [];
  }
};

export const getRecommendations = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/product_recommendations/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return [];
  }
};

export const getTransactionData = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/customer_transaction_insights/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transaction insights:", error);
    return [];
  }
};

export const getProductOptimization = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/product_optimizations/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product optimizations:", error);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/product_data/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product info:", error);
    return [];
  }
};
