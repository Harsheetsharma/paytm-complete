"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { use, useState } from "react";
import { useSetRecoilState } from "recoil";
import { globalLoading } from "@repo/store";
import { P2Ptransfer } from "../app/lib/actions/p2ptransfer";
import { ok } from "assert";
import { toast } from "react-toastify";
import "../components/styles/toast.css";

export default function () {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [loader, setLoader] = useState(false);
  const setGlobalLoading = useSetRecoilState(globalLoading);
  return (
    <Card title="Send">
      <div className="">
        <TextInput
          label="Number"
          placeholder="7638592753"
          onChange={(e) => {
            setNumber(e);
          }}
        ></TextInput>
        <TextInput
          label="Number"
          placeholder="Amount"
          onChange={(e) => {
            setAmount(Number(e));
          }}
        ></TextInput>
        <div className="flex justify-center pt-4">
          <Button
            onClick={async () => {
              setLoader(true);
              try {
                setGlobalLoading(true);
                const response = await P2Ptransfer(number, amount * 100);
                if (response) {
                  toast.success("Transfer successful!", {
                    className: "toast-success",
                  });
                  setTimeout(() => {
                    window.location.href = "/transfer";
                  }, 1000);
                } else {
                  toast.error("Insufficient Funds!", {
                    className: "toast-error",
                  });
                }
              } catch (error) {
                console.error("Insufficient Funds!");
                toast.error("Insufficient Funds!", {
                  className: "toast-error",
                });
              }
              setLoader(false);
              setGlobalLoading(false);
            }}
            loader={loader}
          >
            {loader ? "Processing..." : "Send"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
