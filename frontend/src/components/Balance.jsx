import { useEffect, useState } from "react";
import axios from "axios";

function Balance() {
  const [balance, setBalance] = useState("");
  const token = localStorage.getItem("paytmtoken");
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const getBalance = async () => {
      const res = await axios.get(
        "https://paaytm.onrender.com/api/v1/accounts/balance",
        config
      );

      const data = res.data.balance;
      setBalance(data);
    };
    getBalance();
  }, [token]);
  return (
    <div className="m-8 text-base font-bold">
      Your balance : {Number(balance).toFixed(2)}
    </div>
  );
}

export default Balance;
