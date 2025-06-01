import { CircularProgress } from "@mui/material";
import axios from "../api";
import { useEffect, useState } from "react";

const AxiosCall = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      setLoading(true);
      const response = await axios.get("/products");
      setProducts(response.data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <h1 className="text-3xl text-center mt-8 font-bold text-gray-800">
        API Calling with Axios
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress sx={{ color: "red" }} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition-shadow"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 w-full object-contain rounded-t-2xl"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Brand:</span> {product.brand}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Category:</span>{" "}
                  {product.category}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-base font-bold text-green-600">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AxiosCall;
